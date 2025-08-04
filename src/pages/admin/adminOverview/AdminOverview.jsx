import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AdminCard from "./AdminCard";

const userGrowthData = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 20 },
  { name: "Mar", users: 70 },
  { name: "Apr", users: 65 },
  { name: "May", users: 70 },
  { name: "Jun", users: 65 },
  { name: "Jul", users: 60 },
  { name: "Aug", users: 60 },
  { name: "Sep", users: 25 },
  { name: "Oct", users: 70 },
  { name: "Nov", users: 75 },
  { name: "Dec", users: 75 },
];

const subscriptionData = [
  { name: "Free", value: 60 },
  { name: "Basic", value: 20 },
  { name: "Premium", value: 20 },
  { name: "Gold", value: 60 },
];

const COLORS = ["#FDBA00", "#00C49F", "#FF8FAB", "#4E61F6"];

const AdminOverview = () => {
  return (
    <div className="admin-page space-y-6">
      <AdminCard />

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Growth - Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold flex items-center gap-x-2  text-gray-900 mb-4">
            <img src="/admin-icon.png" className="h-4 w-4" alt="" />
            User Growth
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={userGrowthData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="users"
                fill="#4E61F6"
                barSize={20}
                radius={[30, 30, 30, 30]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Subscription Distribution - Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold flex items-center gap-x-2  text-gray-900 mb-4">
            <img src="/admin-icon.png" className="h-4 w-4" alt="" />
            Subscription Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={subscriptionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {subscriptionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                content={({ payload }) => (
                  <ul className="space-y-2">
                    {payload.map((entry, index) => (
                      <li
                        key={`item-${index}`}
                        className="flex items-center gap-2 text-lg"
                      >
                        <span
                          className="inline-block w-3 h-3 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span>{entry.value}</span>
                      </li>
                    ))}
                  </ul>
                )}
              />
              {/* <Tooltip /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
