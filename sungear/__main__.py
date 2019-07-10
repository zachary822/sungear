from .server import app
import argparse

parser = argparse.ArgumentParser(description="Sungear Visualization Standalone Web App")
parser.add_argument('-H', '--host', type=str, help='hostname of server [localhost]', default='localhost')
parser.add_argument('-p', '--port', type=int, help='port to listen on [5000]', default=5000)

args = parser.parse_args()

app.run(host=args.host, port=args.port)
