interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search movies..."
      className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}