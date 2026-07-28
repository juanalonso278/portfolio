export const trackmaniaRL = {
  id: 7,
  title: 'TrackMania RL Architecture',
  synopsis: 'An early-development reinforcement learning architecture designed for TrackMania Nations Forever, featuring a two-stage hybrid pipeline for environment hooking, macro-scouting, and micro-optimization using continuous control.',
  description: 'This project outlines the roadmap for a TrackMania Nations Forever reinforcement learning architecture. Racing at millisecond precision requires balancing broad environment exploration with extreme micro-optimization. The architecture splits this into two phases: an evolutionary algorithm for macro-scouting to find successful generalized trajectories, and a local optimizer (SAC / CMA-ES) for fine-tuning steering and acceleration inputs for hyper-precise, continuous control. Before model training, custom TMInterface scripts hook into the game engine to extract raw, real-time physics and telemetry data. The pipeline leverages an RX 7900 XTX for high-frequency parallel simulations and heavy matrix calculations, and is designed to scale track by track to isolate variables and debug the infrastructure before moving to complex environments.',
  tags: ['machine learning', 'reinforcement learning', 'python', 'sac', 'cma-es', 'evolutionary algorithm'],
  status: 'Research & Planning Phase'
};
