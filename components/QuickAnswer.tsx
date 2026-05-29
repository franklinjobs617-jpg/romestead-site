export default function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-dark border-l-4 border-ember rounded-r-md p-5 my-6">
      <h2 className="text-lg font-bold text-parchment-light mb-2 mt-0 font-cinzel">
        Quick Answer
      </h2>
      <div className="text-parchment leading-relaxed">{children}</div>
    </div>
  );
}
