import matplotlib.pyplot as plt
import networkx as nx

# Grafo simple no dirigido con 5 nodos
G = nx.Graph()
G.add_edges_from([
    ("A", "B"), ("A", "C"), ("B", "D"), ("C", "D"), ("C", "E")
])
pos = nx.spring_layout(G, seed=42)
plt.figure(figsize=(4,4))
nx.draw(G, pos, with_labels=True, node_color="#90caf9", edge_color="#424242", node_size=800, font_weight='bold')
plt.title("Grafo no dirigido con 5 nodos")
plt.axis('off')
plt.tight_layout()
plt.savefig("img/grafo_simple.png")
plt.close()

# Representación de grafo (para post2)
fig, axs = plt.subplots(1, 2, figsize=(8,4))
# Lista de adyacencia
nx.draw(G, pos, with_labels=True, node_color="#a5d6a7", edge_color="#424242", node_size=800, font_weight='bold', ax=axs[0])
axs[0].set_title("Lista de Adyacencia")
axs[0].axis('off')
# Matriz de adyacencia
adj_matrix = nx.to_numpy_array(G)
axs[1].imshow(adj_matrix, cmap="Blues")
axs[1].set_xticks(range(len(G.nodes)))
axs[1].set_yticks(range(len(G.nodes)))
axs[1].set_xticklabels(G.nodes)
axs[1].set_yticklabels(G.nodes)
for i in range(len(G.nodes)):
    for j in range(len(G.nodes)):
        axs[1].text(j, i, int(adj_matrix[i, j]), ha="center", va="center", color="black")
axs[1].set_title("Matriz de Adyacencia")
axs[1].axis('off')
plt.tight_layout()
plt.savefig("img/representacion_grafo.png")
plt.close()