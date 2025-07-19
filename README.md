# A* Algorithm Visualizer

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)]()

## 🎯 Overview

An interactive web-based visualization tool that demonstrates the A* (A-star) path finding algorithm in real-time. This educational project helps users understand how A* efficiently finds the shortest path between two points while avoiding obstacles using heuristic-based search.

## ✨ Features

- 🎮 **Interactive Grid System** - Click to place/remove obstacles
- 🎨 **Real-time Visualization** - Watch the algorithm explore nodes step-by-step
- 🌈 **Color-coded Display** - Visual representation of open list, closed list, and final path
- ⚡ **Speed Control** - Adjustable animation speed (1-100ms delays)
- 🎯 **Heuristic Visualization** - See how Manhattan distance guides the search
- 🔄 **Reset & Clear Functions** - Easy grid management
- 📱 **Responsive Design** - Works on desktop and mobile devices

## 🚀 Demo

![A* Algorithm Visualization Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen?style=for-the-badge)

### Visual Legend
- 🟩 **Green (S)**: Start position
- 🟥 **Red (G)**: Goal position  
- ⬜ **White**: Empty cells
- ⬛ **Black**: Obstacles
- 🟢 **Light Green**: Open list (nodes being considered)
- 🌸 **Pink**: Closed list (nodes already processed)
- 🟡 **Gold**: Final optimal path

## 🛠️ Installation

### Option 1: Direct Download
1. Download the HTML file
2. Open in any modern web browser
3. Start visualizing!

### Option 2: Clone Repository
```bash
git clone https://github.com/yourusername/astar-visualizer.git
cd astar-visualizer
```

### Option 3: Run Locally
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 💻 Usage

### Basic Usage
1. **Set Obstacles**: Click on empty cells to place obstacles (black squares)
2. **Adjust Speed**: Use the speed slider to control animation speed
3. **Start Algorithm**: Click "Start A*" to begin visualization
4. **Watch Magic**: Observe how A* finds the optimal path
5. **Reset**: Use "Reset Grid" or "Clear Path" as needed

### Advanced Features
- **Custom Start/Goal**: Modify the JavaScript to change start and goal positions
- **Grid Size**: Adjust `gridSize` variable for different grid dimensions
- **Heuristic Functions**: Experiment with different distance calculations

## 🔧 Technical Details

### Algorithm Implementation
```javascript
// Core A* components
- Node class with g, h, f costs
- Manhattan distance heuristic
- Priority queue using array sorting
- Path reconstruction via parent pointers
```

## ⚙️ Controls

| **Control**        | **Action** |
|--------------------|------------|
| Click on cells     | Add/remove obstacles 🚧 |
| Start A*           | Begins visualization of the A* search algorithm 🧭 |
| Reset Grid         | Clears the board to default state ♻️ |
| Clear Path         | Removes visited and path cells, retains walls 🧼 |
| Speed Slider       | Adjusts the algorithm speed (smaller = faster) ⏱️ |


### Performance Characteristics
- **Time Complexity**: O(b^d) where b is branching factor, d is depth
- **Space Complexity**: O(b^d) for storing open and closed lists
- **Optimal**: Yes (with admissible heuristic)
- **Complete**: Yes (in finite spaces)

## 📁 Project Structure

```
A*-visualizer/
│
├── index.html          # Main HTML file with embedded CSS/JS
├── README.md           # Project documentation
└── assets/             # Optional: separate CSS/JS files
    ├── style.css
    └── script.js
```

## 🎓 Educational Value

This visualizer helps understand:
- **Path finding Algorithms** - How computers navigate through spaces
- **Heuristic Search** - Using estimated costs to guide exploration
- **Graph Theory** - Nodes, edges, and traversal strategies
- **Algorithm Analysis** - Time/space complexity considerations
- **Data Structures** - Priority queues and node management

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request


## 🐛 Known Issues

- Grid cells may be small on very small screens
- Animation performance may vary on older browsers
- No diagonal movement currently supported

## 📈 Future Enhancements

- [ ] **Multiple Algorithms**: Compare A*, Dijkstra, BFS, DFS
- [ ] **Weighted Paths**: Different terrain costs
- [ ] **3D Visualization**: Extend to 3D pathfinding
- [ ] **Maze Generator**: Auto-generate interesting obstacles
- [ ] **Statistics Panel**: Show nodes explored, path length, time taken
- [ ] **Save/Load**: Export and import grid configurations

## 📚 Resources

- [A* Search Algorithm - Wikipedia](https://en.wikipedia.org/wiki/A*_search_algorithm)
- [Introduction to A* - Red Blob Games](https://www.redblobgames.com/pathfinding/a-star/introduction.html)
- [Pathfinding Algorithms - GeeksforGeeks](https://www.geeksforgeeks.org/a-search-algorithm/)## 🙏 Acknowledgments

- Inspired by pathfinding visualizations across the web
- Thanks to the computer science education community
- Built for learning and teaching algorithm concepts

---

## 🤝 Contributing

Pull requests are welcome! If you have suggestions or improvements, please feel free to fork the repo and open an issue or PR.

## 📚 Documentation

Comprehensive documentation for this project is available on [Hashnode](https://hashnode.com/@Shashwat56).

> At present, this README serves as the primary source of documentation.

## 📜 License

This project is distributed under the MIT License.  
For detailed licensing information, please refer to the [LICENSE](./LICENSE) file included in this repository.


## 📩 Contact  
### Shashwat  
**Software Developer | Cloud & DevOps Enthusiast**

**🔹 Java Backend Development**<br>
**🔹 Cloud Architecture & Containerization**<br>
**🔹 DevOps & Scalable Systems**

### 🚀 Open Source | Tech Innovation  
Passionate about building scalable applications and contributing to transformative tech solutions.

### 📌 Find me here:  
[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/Shashwat-19)  [<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/shashwatk1956/)  [<img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />](mailto:shashwat1956@gmail.com)  [<img src="https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" />](https://hashnode.com/@Shashwat56)




⭐ **Star this repository if you found it helpful!**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=yourusername.astar-visualizer)
