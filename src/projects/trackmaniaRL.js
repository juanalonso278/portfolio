export const trackmaniaRL = {
  id: 7,
  title: 'Trackmania Nations Forever AI: System Architecture',
  synopsis: 'An autonomous AI agent trained to drive in Trackmania Nations Forever (TMNF) using NeuroEvolution of Augmenting Topologies (NEAT), featuring a custom synchronous C++ to Python IPC bridge.',
  description: 'This project involves training an autonomous AI agent to drive in Trackmania Nations Forever (TMNF) using NeuroEvolution of Augmenting Topologies (NEAT). Because the game engine and the machine learning environment exist in entirely different ecosystems, the core engineering challenge was designing a robust, synchronous Inter-Process Communication (IPC) bridge between the C++ game engine and a Python-based machine learning stack.',
  tags: ['machine learning', 'reinforcement learning', 'python', 'neat', 'tcp/ip sockets', 'angelscript'],
  status: 'In Development',
  useCustomArchitecture: true,
  architectureSections: [
    {
      title: '1. The Environment (TMNF & TMInterface)',
      content: 'Trackmania Nations Forever (TMNF) acts as the physics simulation environment. TMInterface is a powerful toolset that exposes the game engine to external code. It provides deterministic execution, allowing the system to read game memory (car position, velocity, rotation) and inject inputs seamlessly without dealing with visual rendering bottlenecks or framerate inconsistencies.'
    },
    {
      title: '2. The Synchronous Communication Bridge',
      content: 'To prevent the game from running faster than the AI can think, a synchronous Inter-Process Communication (IPC) system was built over TCP/IP.\n\n• AngelScript Plugin (TrackmaniaRLPlugin.as): Executes synchronously inside the TMInterface game loop. Every simulation tick, it extracts telemetry data (speed, 3D position, 3D velocity, and rotation) and sends it over TCP. It halts the game loop until it receives a response containing the next driving commands.\n\n• Python TCP Server (tm_client.py): Acts as the host, receiving the raw telemetry string, parsing it, and formatting it into an observation space that the neural network can process. It handles socket connections, timeouts, and state management, eventually returning the network\'s actions and reset flags back to the game.'
    },
    {
      title: '3. The Reinforcement Learning Engine (NEAT)',
      content: 'Powered by the neat-python library, this component evolves the neural networks over multiple generations.\n\n• Observation Space (Inputs): A vector containing Speed, 3D Position, 3D Velocity, and 3D Rotation (Yaw, Pitch, Roll).\n\n• Action Space (Outputs): Steering (continuous from -1.0 to 1.0), Acceleration (threshold 0.0 to 1.0), and Braking (threshold 0.0 to 1.0).\n\n• Generational Lifecycle & Instant State Rewind: Once a genome finishes its run, the server sends a reset command. The AngelScript plugin intercepts this and uses simManager.RewindToState() to instantly rewind the game to the exact physical state of the starting line, completely bypassing traditional loading screens and massively accelerating the training loop.'
    },
    {
      title: '4. Reward System (Fitness Evaluation)',
      content: 'The fitness evaluation is modularly designed to score the genome based on its progression through the track. It acts as a "black box" evaluator that grades the AI based on its ability to follow a predefined optimal racing line (via waypoints), the total distance traveled, and its survival time (avoiding crashes).'
    }
  ],
  techStack: [
    { category: 'Machine Learning', name: 'Python, NEAT (neat-python)' },
    { category: 'Environment', name: 'Trackmania Nations Forever, TMInterface' },
    { category: 'Scripting', name: 'AngelScript' },
    { category: 'Networking', name: 'TCP/IP Sockets' }
  ]
};
