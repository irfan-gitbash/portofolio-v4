import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart3,
  Eye,
  Users,
  MapPin,
  Activity,
  TrendingUp,
  Github,
  Clock,
  Code,
  Zap,
  Filter,
  Calendar,
  Keyboard, // tambah ini
} from "lucide-react";

const analyticsData = {
  pageViews: "24967",
  visitors: "3283",
  visits: "4838",
  countries: "66",
  events: "30",
};

const githubStats = {
  total: "570",
  thisWeek: "103",
  best: "50",
  average: "2/day",
};

const monkeytypeStats = {
  username: "Muhammad irfan",
  avatar: "/images/irfan.jpg",
  joinDate: "05 Apr 2022",
  currentStreakDays: 1,
  level: 86,
  xpCurrent: 2702,
  xpMax: 4314,

  testsStarted: "2241",
  testsCompleted: "879",
  totalTime: "09:25:18",

  leaderboard15s: "136886th",
  leaderboard15sTop: "31.51%",
  leaderboard60s: "186407th",
  leaderboard60sTop: "43.63%",

  timeStats: [
    { label: "15 time", value: 118, percent: "96%" },
    { label: "30 time", value: 116, percent: "97%" },
    { label: "60 time", value: 93, percent: "95%" },
    { label: "120 time", value: 55, percent: "92%" },
  ],
  wordStats: [
    { label: "10 words", value: 134, percent: "100%" },
    { label: "25 words", value: 114, percent: "100%" },
    { label: "50 words", value: 90, percent: "96%" },
    { label: "100 words", value: 87, percent: "96%" },
  ],
};

const wakatimeStats = {
  startDate: "April 01, 2025",
  endDate: "August 25, 2025",
  dailyAverage: "3 hrs 16 mins",
  thisWeek: "22 hrs 57 mins",
  bestDay: "August 04, 2025 (7 hrs 40 mins)",
  allTime: "875 hrs 47 mins",
};

const topLanguages = [
  { name: "TypeScript", percentage: 70, color: "bg-blue-500" },
  { name: "Bash", percentage: 5, color: "bg-gray-500" },
  { name: "SQL", percentage: 3, color: "bg-orange-500" },
  { name: "PHP", percentage: 70, color: "bg-cyan-500" },
  { name: "JSON", percentage: 4, color: "bg-yellow-500" },
  { name: "MDX", percentage: 2, color: "bg-purple-500" },
];

const recentActivity = [
  {
    time: "2 hours ago",
    action: "Pushed to",
    repo: "portfolio-website",
    commits: 3,
  },
  {
    time: "5 hours ago",
    action: "Created PR in",
    repo: "open-source-project",
    commits: 1,
  },
  {
    time: "1 day ago",
    action: "Merged PR in",
    repo: "backend-service",
    commits: 5,
  },
  {
    time: "2 days ago",
    action: "Opened issue in",
    repo: "ui-component-library",
    commits: 0,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 pt-8 lg:pt-0">
      {/* Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          My personal dashboard built with Next.js , visualizing development
          statistics
        </p>
      </section>

      {/* GitHub Contributions */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Github className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              GitHub Contributions
            </h2>
          </div>
          <div className="text-sm text-muted-foreground">@irfan-gitbash</div>
        </div>
        <p className="text-muted-foreground">
          My GitHub activity over the past year.
        </p>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="space-y-1">
                <div className="text-xl font-bold text-green-500">
                  {githubStats.total}
                </div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-500">
                  {githubStats.thisWeek}
                </div>
                <div className="text-sm text-muted-foreground">This week</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-500">
                  {githubStats.best}
                </div>
                <div className="text-sm text-muted-foreground">Best</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-500">
                  {githubStats.average}
                </div>
                <div className="text-sm text-muted-foreground">Average</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* GitHub Contribution Graph */}
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">
                    GitHub Contributions
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  @irfan-gitbash
                </span>
              </div>

              <p className="text-sm text-muted-foreground">
                My GitHub activity over the past year.
              </p>

              {/* Month Labels */}
              <div className="flex justify-between text-xs text-muted-foreground px-2">
                {["April", "May", "Jun", "Jul", "Aug", "Sep"].map(
                  (month, index) => (
                    <span key={index} className="w-16 text-center">
                      {month}
                    </span>
                  )
                )}
              </div>

              {/* Contribution Grid - Horizontal Layout */}
              <div className="relative overflow-x-auto">
                <div className="flex gap-1 min-w-max px-2">
                  {/* Generate 52 weeks of data */}
                  {Array.from({ length: 82 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {/* 7 days per week */}
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const randomValue = Math.random();
                        let intensity = 0;

                        // Create realistic contribution pattern
                        if (dayIndex >= 1 && dayIndex <= 5) {
                          // Weekdays
                          if (randomValue > 0.8) intensity = 4;
                          else if (randomValue > 0.6) intensity = 3;
                          else if (randomValue > 0.35) intensity = 2;
                          else if (randomValue > 0.15) intensity = 1;
                        } else {
                          // Weekends
                          if (randomValue > 0.85) intensity = 2;
                          else if (randomValue > 0.7) intensity = 1;
                        }

                        const colors = {
                          0: "bg-gray-800/50", // No contributions
                          1: "bg-green-900/80", // Low
                          2: "bg-green-700", // Medium
                          3: "bg-green-500", // High
                          4: "bg-green-400", // Very high
                        };

                        return (
                          <div
                            key={dayIndex}
                            className={`w-2.5 h-2.5 rounded-sm ${colors[intensity]} hover:ring-1 hover:ring-green-400 transition-all cursor-pointer`}
                            title={`${intensity} contributions`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-gray-800/50 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-green-900/80 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-green-700 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-sm" />
                </div>
                <span>More</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* WakaTime & Language Stats */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* WakaTime Stats */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              ⏰ WakaTime Stats
            </h2>
          </div>
          <p className="text-muted-foreground">
            Coding activity over the past 7 days.
          </p>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Start Date
                  </div>
                  <div className="font-semibold">{wakatimeStats.startDate}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">End Date</div>
                  <div className="font-semibold">{wakatimeStats.endDate}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Average Daily Coding Time
                  </div>
                  <div className="font-semibold text-primary">
                    {wakatimeStats.dailyAverage}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Total This Week
                  </div>
                  <div className="font-semibold text-primary">
                    {wakatimeStats.thisWeek}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Best Day</div>
                  <div className="font-semibold">{wakatimeStats.bestDay}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    All-Time Coding Since Joined
                  </div>
                  <div className="font-semibold text-primary">
                    {wakatimeStats.allTime}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium">Top Languages</div>
                {topLanguages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-16 text-sm">{lang.name}</div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className={`${lang.color} h-2 rounded-full transition-all`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground w-8">
                      {lang.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Monkeytype Stats */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Keyboard className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Monkeytype Stats
              </h2>
            </div>
            <div className="text-sm text-muted-foreground">
              {monkeytypeStats.username}
            </div>
          </div>
          <p className="text-muted-foreground">
            Typing statistics and performance.
          </p>

          {/* Profile + Summary card */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left: avatar + identity + level bar */}
                <div className="flex-1 min-w-[240px]">
                  <div className="flex items-center gap-4">
                    <img
                      src={monkeytypeStats.avatar}
                      alt={monkeytypeStats.username}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-green-500">
                        {monkeytypeStats.username}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Joined {monkeytypeStats.joinDate}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Current Streak: {monkeytypeStats.currentStreakDays} days
                      </div>
                    </div>
                  </div>

                  {/* Level / XP bar */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-green-500 font-semibold">
                      {monkeytypeStats.level}
                    </span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/90 rounded-full"
                        style={{
                          width: `${
                            (monkeytypeStats.xpCurrent /
                              monkeytypeStats.xpMax) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {monkeytypeStats.xpCurrent}/{monkeytypeStats.xpMax}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-20 bg-border/70" />

                {/* Right: three stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">
                      {monkeytypeStats.testsStarted}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tests Started
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">
                      {monkeytypeStats.testsCompleted}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tests Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-500 whitespace-nowrap">
                      {monkeytypeStats.totalTime}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Typing Time
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard card */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium text-foreground">
                  All-Time English Leaderboard
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      15 seconds
                      <div className="text-xs">
                        top {monkeytypeStats.leaderboard15sTop}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-500">
                      {monkeytypeStats.leaderboard15s}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      60 seconds
                      <div className="text-xs">
                        top {monkeytypeStats.leaderboard60sTop}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-500">
                      {monkeytypeStats.leaderboard60s}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom two cards: Time and Words */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Time stats */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {monkeytypeStats.timeStats.map((s, i) => (
                    <div key={i} className="text-center space-y-1">
                      <div className="text-xs text-muted-foreground">
                        {s.label}
                      </div>
                      <div className="text-2xl font-bold text-green-500">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {s.percent}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Word stats */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {monkeytypeStats.wordStats.map((s, i) => (
                    <div key={i} className="text-center space-y-1">
                      <div className="text-xs text-muted-foreground">
                        {s.label}
                      </div>
                      <div className="text-2xl font-bold text-green-500">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {s.percent}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
