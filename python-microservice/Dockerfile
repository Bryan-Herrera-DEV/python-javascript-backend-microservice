# Use la imagen oficial de Python como base
FROM python:3.9

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN apt-get update && apt-get install -y protobuf-compiler

# Generar los archivos gRPC a partir de los archivos .proto
RUN python -m grpc_tools.protoc -I./ --python_out=./ --grpc_python_out=./ ./scraper.proto

EXPOSE 50051
CMD ["python", "scraper.py"]