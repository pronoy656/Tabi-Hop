import BucketCard from "../../../components/BucketCard"
import PrimaryButton from "../../../components/shared/PrimaryButton"
import SectionHeader from "../../../components/shared/SectionHeader"
const todoGroups = [
  {
    title: "Sky Diving",
    todos: [
      {
        id: 1,
        title: "Design login page UI",
        completed: false,
        priority: "High",
      },
      {
        id: 2,
        title: "Fix cart functionality bug",
        completed: true,
        priority: "Medium",
      },
      {
        id: 1,
        title: "Design login page UI",
        completed: false,
        priority: "High",
      },
      {
        id: 2,
        title: "Fix cart functionality bug",
        completed: true,
        priority: "Medium",
      },
      {
        id: 1,
        title: "Design login page UI",
        completed: false,
        priority: "High",
      },
      {
        id: 2,
        title: "Fix cart functionality bug",
        completed: true,
        priority: "Medium",
      },
    ],
  },
  {
    title: "Bug Hunt",
    todos: [
      {
        id: 3,
        title: "Update dashboard layout",
        completed: false,
        priority: "Low",
      },
      {
        id: 4,
        title: "Deploy Firebase backend",
        completed: true,
        priority: "High",
      },
      {
        id: 3,
        title: "Update dashboard layout",
        completed: false,
        priority: "Low",
      },
      {
        id: 4,
        title: "Deploy Firebase backend",
        completed: true,
        priority: "High",
      },
      {
        id: 3,
        title: "Update dashboard layout",
        completed: false,
        priority: "Low",
      },
      {
        id: 4,
        title: "Deploy Firebase backend",
        completed: true,
        priority: "High",
      },
    ],
  },
  {
    title: "Sprint Goals",
    todos: [
      {
        id: 5,
        title: "Test Stripe integration",
        completed: false,
        priority: "High",
      },
      {
        id: 6,
        title: "Write unit tests",
        completed: false,
        priority: "Medium",
      },
      {
        id: 5,
        title: "Test Stripe integration",
        completed: false,
        priority: "High",
      },
      {
        id: 6,
        title: "Write unit tests",
        completed: false,
        priority: "Medium",
      },
      {
        id: 5,
        title: "Test Stripe integration",
        completed: false,
        priority: "High",
      },
      {
        id: 6,
        title: "Write unit tests",
        completed: false,
        priority: "Medium",
      },
    ],
  },
];
const BucketListSection = () => {
  return (
    <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Bucket List"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton
            text={"Add more"}
            bgColor={"#6E67D5"}
            textColor="white"
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {todoGroups.map((group, idx) => (
            <BucketCard key={idx} title={group.title} todos={group.todos} />
          ))}
        </div>
      </section>
  )
}

export default BucketListSection