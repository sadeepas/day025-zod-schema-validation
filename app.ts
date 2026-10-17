// TypeScript: Runtime Type Validation with Zod (Day 25)
// Day 25 - Type-Safe Application Development (Intermediate)

console.log("=== TypeScript: Runtime Type Validation with Zod (Day 25) ===");

interface MetricPayload {
  day: number;
  topic: string;
  timestamp: string;
  status: "active" | "completed";
}

class PipelineEngine {
  private history: MetricPayload[] = [];

  constructor(private name: string) {}

  public record(metric: MetricPayload): void {
    this.history.push(metric);
    console.log(`[${this.name}] Recorded: ${metric.topic} (Status: ${metric.status})`);
  }

  public getSummary() {
    return {
      totalEntries: this.history.length,
      latest: this.history[this.history.length - 1]
    };
  }
}

const engine = new PipelineEngine("zod-schema-validation");
engine.record({
  day: 25,
  topic: "TypeScript: Runtime Type Validation with Zod (Day 25)",
  timestamp: new Date().toISOString(),
  status: "active"
});

console.log("Telemetry Summary:", engine.getSummary());
