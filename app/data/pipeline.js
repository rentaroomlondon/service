// The four layers shown in the hero's pipeline inspector, top to bottom.
export const layers = [
  {
    id: "edge",
    name: "Edge & Field Devices",
    summary: "Cameras, thermal sensors, Linux gateways",
    protocol: "MQTT / RTSP",
    readout: "LAYER 01 // EDGE_RUNTIME",
    latency: "< 15ms local",
    detail:
      "Local ONNX inference runs directly on site gateways. Sensor buffers persist locally during network dropouts and sync automatically once connectivity returns.",
  },
  {
    id: "signals",
    name: "Signal & Video Ingest",
    summary: "Filtering, FFT, stream recording & transcoding",
    protocol: "C++ / FFmpeg",
    readout: "LAYER 02 // SIGNAL_AND_MEDIA",
    latency: "Real-time stream",
    detail:
      "RTSP camera feeds and raw thermal or audio telemetry are filtered, synchronized, and indexed into searchable clips using C++, FFmpeg, and SciPy.",
  },
  {
    id: "ai",
    name: "AI & Decision Workflows",
    summary: "Vision models, document parsing & human review",
    protocol: "ONNX / PyTorch",
    readout: "LAYER 03 // AI_AUTOMATION",
    latency: "Human-in-the-loop",
    detail:
      "Vision and document models classify routine events and draft structured reports, escalating low-confidence cases to operators for review.",
  },
  {
    id: "app",
    name: "Full-Stack App & Cloud",
    summary: "Operator consoles, APIs, RBAC & regional hosting",
    protocol: "React / Postgres",
    readout: "LAYER 04 // FULLSTACK_CLOUD",
    latency: "Regional SLA",
    detail:
      "Operators monitor live WebRTC feeds, replay incidents, and manage device fleets inside a role-gated web console hosted in your chosen region.",
  },
];
