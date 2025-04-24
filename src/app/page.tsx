import StatusLabel, { Status } from './components/status-lable';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended} disabled={true}>
        Suspended
      </StatusLabel>
    </main>
  );
}
