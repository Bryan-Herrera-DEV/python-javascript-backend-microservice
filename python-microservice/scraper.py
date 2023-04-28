import requests
from bs4 import BeautifulSoup
import grpc
import scraper_pb2
import scraper_pb2_grpc
from concurrent import futures
import json

def scrape(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }

    response = requests.get("https://finance.yahoo.com/quote/EURUSD%3DX/history?p=EURUSD%3DX", headers=headers)
    soup = BeautifulSoup(response.content, "html.parser")

    # Encontrar la tabla de historial de precios
    table = soup.find("table", class_="W(100%) M(0)")
    # Extraer los encabezados de la tabla
    headers = [header.text.strip() for header in table.find_all("th")]

    # Extraer las filas de la tabla
    rows = table.find("tbody").find_all("tr")

    # Almacenar la información en un diccionario
    price_history = []
    for row in rows:
        price_data = [data.text.strip() for data in row.find_all("td")]
        if len(price_data) == len(headers):  # Verificar si la fila contiene todos los datos necesarios
            price_entry = dict(zip(headers, price_data))
            price_history.append(price_entry)

    # Limitar a los últimos 5 resultados
    price_history = price_history[:5]

    # Convertir el resultado en una cadena JSON
    price_history_json = json.dumps(price_history, indent=2)

    return price_history_json

class ScraperServicer(scraper_pb2_grpc.ScraperServicer):
    def Scrape(self, request, context):
        data = scrape(request.url)
        return scraper_pb2.ScrapeResponse(data=data)

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    scraper_pb2_grpc.add_ScraperServicer_to_server(ScraperServicer(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    serve()