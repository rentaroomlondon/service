import { ChipIcon, LayoutIcon, NodesIcon, ServerIcon, VideoIcon, WaveIcon } from "@/app/components/icons";

export const categories = [
  { id: "all", label: "All (6)" },
  { id: "software", label: "Software & Cloud" },
  { id: "media", label: "Video & Signals" },
  { id: "intelligence", label: "AI & Edge" },
];

export const capabilities = [
  {
    title: "Full stack development",
    category: "software",
    icon: LayoutIcon,
    blurb: "Web apps, mobile apps, APIs and admin dashboards, shipped as one product instead of three projects.",
    points: ["Customer portals and internal tools", "REST and live data APIs", "Role based access and audit trails"],
    stack: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  },
  {
    title: "Video management",
    category: "media",
    icon: VideoIcon,
    blurb: "Platforms that take in camera streams, store them, and let people find and replay the moment that matters.",
    points: ["Camera ingest, live view and recording", "Event search and clip export", "Fleets of cameras across many sites"],
    stack: ["RTSP", "WebRTC", "HLS", "FFmpeg", "GStreamer"],
  },
  {
    title: "Signal processing",
    category: "media",
    icon: WaveIcon,
    blurb: "We turn noisy sensor, thermal and audio data into clean signals your software can act on.",
    points: ["Filtering, FFT and peak detection", "Thermal and audio analysis", "Combining several sensors into one reading"],
    stack: ["Python", "NumPy", "SciPy", "C++"],
  },
  {
    title: "AI automation",
    category: "intelligence",
    icon: NodesIcon,
    blurb: "Models and workflows that take over repetitive decisions, with a person kept in the loop where it counts.",
    points: ["Computer vision and event detection", "Document and form processing", "Alert routing and report drafting"],
    stack: ["PyTorch", "ONNX", "LLM APIs"],
  },
  {
    title: "Edge and IoT",
    category: "intelligence",
    icon: ChipIcon,
    blurb: "Run the model next to the sensor so the system keeps working when the network does not.",
    points: ["Inference on gateways and small devices", "Device fleets with remote updates", "Sensor data that stays on site"],
    stack: ["MQTT", "ONNX Runtime", "Linux"],
  },
  {
    title: "Cloud and operations",
    category: "software",
    icon: ServerIcon,
    blurb: "Deployment, monitoring and data hosting set up where your rules say the data has to live.",
    points: ["Container based releases", "Logs, metrics and alerting", "Hosting in the region you choose"],
    stack: ["Docker", "CI/CD", "Linux"],
  },
];
