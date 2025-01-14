// cron.js
import cron from "node-cron";
import { fetchAndStoreTrends } from "@/lib/TrendCron";
import { fetchAndStoreTimeline } from "@/lib/TimelineCron";

// Schedule the job to run every 20 minutes
cron.schedule("*/0.5 * * * *", () => {
  console.log("Running cron job");
  fetchAndStoreTrends();
  fetchAndStoreTimeline();
});
