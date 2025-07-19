class Node {
            constructor(x, y, g = 0, h = 0, parent = null) {
                this.x = x;
                this.y = y;
                this.g = g;
                this.h = h;
                this.f = g + h;
                this.parent = parent;
            }
        }

        class AStarVisualizer {
            constructor() {
                this.gridSize = 15;
                this.grid = [];
                this.start = { x: 1, y: 1 };
                this.goal = { x: 13, y: 13 };
                this.isRunning = false;
                this.speed = 50;
                
                this.initializeGrid();
                this.setupEventListeners();
                this.renderGrid();
            }
            
            initializeGrid() {
                this.grid = [];
                for (let i = 0; i < this.gridSize; i++) {
                    this.grid[i] = [];
                    for (let j = 0; j < this.gridSize; j++) {
                        this.grid[i][j] = 0; // 0 = empty, 1 = obstacle
                    }
                }
            }
            
            setupEventListeners() {
                document.getElementById('startBtn').addEventListener('click', () => this.startAStar());
                document.getElementById('resetBtn').addEventListener('click', () => this.resetGrid());
                document.getElementById('clearPathBtn').addEventListener('click', () => this.clearPath());
                
                const speedSlider = document.getElementById('speedSlider');
                speedSlider.addEventListener('input', (e) => {
                    this.speed = 101 - parseInt(e.target.value);
                    document.getElementById('speedValue').textContent = this.speed + 'ms';
                });
            }
            
            renderGrid() {
                const gridElement = document.getElementById('grid');
                gridElement.innerHTML = '';
                
                for (let i = 0; i < this.gridSize; i++) {
                    for (let j = 0; j < this.gridSize; j++) {
                        const cell = document.createElement('div');
                        cell.className = 'cell';
                        cell.dataset.x = i;
                        cell.dataset.y = j;
                        
                        if (i === this.start.x && j === this.start.y) {
                            cell.classList.add('start');
                            cell.textContent = 'S';
                        } else if (i === this.goal.x && j === this.goal.y) {
                            cell.classList.add('goal');
                            cell.textContent = 'G';
                        } else if (this.grid[i][j] === 1) {
                            cell.classList.add('obstacle');
                        } else {
                            cell.classList.add('empty');
                        }
                        
                        cell.addEventListener('click', () => this.toggleCell(i, j));
                        gridElement.appendChild(cell);
                    }
                }
            }
            
            toggleCell(x, y) {
                if (this.isRunning) return;
                if ((x === this.start.x && y === this.start.y) || (x === this.goal.x && y === this.goal.y)) return;
                
                this.grid[x][y] = this.grid[x][y] === 0 ? 1 : 0;
                this.renderGrid();
            }
            
            heuristic(node, goal) {
                return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
            }
            
            getNeighbors(node) {
                const neighbors = [];
                const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                
                for (const [dx, dy] of directions) {
                    const newX = node.x + dx;
                    const newY = node.y + dy;
                    
                    if (newX >= 0 && newX < this.gridSize && 
                        newY >= 0 && newY < this.gridSize && 
                        this.grid[newX][newY] !== 1) {
                        neighbors.push(new Node(newX, newY));
                    }
                }
                
                return neighbors;
            }
            
            updateCell(x, y, className) {
                const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
                if (cell && !cell.classList.contains('start') && !cell.classList.contains('goal')) {
                    cell.className = `cell ${className}`;
                }
            }
            
            async startAStar() {
                if (this.isRunning) return;
                
                this.isRunning = true;
                document.getElementById('startBtn').disabled = true;
                document.getElementById('status').textContent = 'Running A* Algorithm...';
                
                this.clearPath();
                
                const startNode = new Node(this.start.x, this.start.y);
                const goalNode = new Node(this.goal.x, this.goal.y);
                
                const openList = [startNode];
                const closedSet = new Set();
                const openSet = new Set([`${this.start.x},${this.start.y}`]);
                
                while (openList.length > 0) {
                    // Sort by f value
                    openList.sort((a, b) => a.f - b.f);
                    const current = openList.shift();
                    const currentKey = `${current.x},${current.y}`;
                    
                    openSet.delete(currentKey);
                    closedSet.add(currentKey);
                    
                    this.updateCell(current.x, current.y, 'closed');
                    await this.sleep(this.speed);
                    
                    if (current.x === goalNode.x && current.y === goalNode.y) {
                        await this.reconstructPath(current);
                        document.getElementById('status').textContent = 'Path found!';
                        this.isRunning = false;
                        document.getElementById('startBtn').disabled = false;
                        return;
                    }
                    
                    for (const neighbor of this.getNeighbors(current)) {
                        const neighborKey = `${neighbor.x},${neighbor.y}`;
                        
                        if (closedSet.has(neighborKey)) continue;
                        
                        neighbor.g = current.g + 1;
                        neighbor.h = this.heuristic(neighbor, goalNode);
                        neighbor.f = neighbor.g + neighbor.h;
                        neighbor.parent = current;
                        
                        if (!openSet.has(neighborKey)) {
                            openList.push(neighbor);
                            openSet.add(neighborKey);
                            this.updateCell(neighbor.x, neighbor.y, 'open');
                        }
                    }
                }
                
                document.getElementById('status').textContent = 'No path found!';
                this.isRunning = false;
                document.getElementById('startBtn').disabled = false;
            }
            
            async reconstructPath(node) {
                const path = [];
                let current = node;
                while (current) {
                    path.unshift(current);
                    current = current.parent;
                }
                
                for (const node of path) {
                    if (!(node.x === this.start.x && node.y === this.start.y) && 
                        !(node.x === this.goal.x && node.y === this.goal.y)) {
                        this.updateCell(node.x, node.y, 'path');
                        await this.sleep(this.speed);
                    }
                }
            }
            
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            
            resetGrid() {
                if (this.isRunning) return;
                this.initializeGrid();
                this.renderGrid();
                document.getElementById('status').textContent = 'Click on grid to place obstacles. Green = Start, Red = Goal';
            }
            
            clearPath() {
                if (this.isRunning) return;
                const cells = document.querySelectorAll('.cell');
                cells.forEach(cell => {
                    if (cell.classList.contains('open') || 
                        cell.classList.contains('closed') || 
                        cell.classList.contains('path')) {
                        const x = parseInt(cell.dataset.x);
                        const y = parseInt(cell.dataset.y);
                        if (this.grid[x][y] === 0) {
                            cell.className = 'cell empty';
                        }
                    }
                });
            }
        }
        
        // Initialize the visualizer when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            new AStarVisualizer();
        });