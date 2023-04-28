import requests
from bs4 import BeautifulSoup
import grpc
import scraper_pb2
import scraper_pb2_grpc
from concurrent import futures

def scrape(url):
    response = requests.get("https://finance.yahoo.com/currency-converter")
    soup = BeautifulSoup(response.content, "html.parser")
    # Aquí va la lógica de extracción de datos
    return soup

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