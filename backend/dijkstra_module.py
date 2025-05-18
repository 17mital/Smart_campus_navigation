import xml.etree.ElementTree as ET
import math
import heapq

OSM_FILE = "map.osm"  # Your campus map

def haversine(coord1, coord2):
    lat1, lon1 = coord1
    lat2, lon2 = coord2
    R = 6371  # Earth radius in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c * 1000  # in meters

def parse_osm(filename):
    tree = ET.parse(filename)
    root = tree.getroot()

    nodes = {}
    graph = {}

    for node in root.findall('node'):
        node_id = node.attrib['id']
        lat = float(node.attrib['lat'])
        lon = float(node.attrib['lon'])
        nodes[node_id] = (lat, lon)
        graph[node_id] = []

    for way in root.findall('way'):
        nds = [nd.attrib['ref'] for nd in way.findall('nd')]
        for i in range(len(nds) - 1):
            u, v = nds[i], nds[i + 1]
            if u in nodes and v in nodes:
                dist = haversine(nodes[u], nodes[v])
                graph[u].append((v, dist))
                graph[v].append((u, dist))

    return nodes, graph

def find_nearest_node(coord, nodes):
    min_node = None
    min_dist = float('inf')
    for node_id, node_coord in nodes.items():
        dist = haversine(coord, node_coord)
        if dist < min_dist:
            min_dist = dist
            min_node = node_id
    return min_node

def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    prev = {node: None for node in graph}
    dist[start] = 0
    queue = [(0, start)]

    while queue:
        current_dist, u = heapq.heappop(queue)
        if current_dist > dist[u]:
            continue

        for v, weight in graph[u]:
            alt = dist[u] + weight
            if alt < dist[v]:
                dist[v] = alt
                prev[v] = u
                heapq.heappush(queue, (alt, v))

    return dist, prev

def reconstruct_path(prev, start, end):
    path = []
    at = end
    while at:
        path.append(at)
        at = prev[at]
    path.reverse()
    return path if path[0] == start else []

def find_shortest_path_coordinates(source_coord, dest_coord):
    nodes, graph = parse_osm(OSM_FILE)
    source_node = find_nearest_node(source_coord, nodes)
    dest_node = find_nearest_node(dest_coord, nodes)

    _, prev = dijkstra(graph, source_node)
    path_node_ids = reconstruct_path(prev, source_node, dest_node)
    path_coords = [nodes[node_id] for node_id in path_node_ids]
    return path_coords
