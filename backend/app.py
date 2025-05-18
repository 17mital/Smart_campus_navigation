from flask import Flask, request, jsonify
from flask_cors import CORS
from dijkstra_module import find_shortest_path_coordinates

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

@app.route("/api/shortest-path", methods=["POST"])
def get_shortest_path():
    data = request.get_json()
    source = tuple(data["source"])  # (lat, lon)
    destination = tuple(data["destination"])  # (lat, lon)

    path = find_shortest_path_coordinates(source, destination)
    return jsonify({"route": path})

if __name__ == "__main__":
    app.run(debug=True)
