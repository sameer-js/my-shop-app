import { useRouter } from 'next/navigation';

function Category({ label }: { label: string }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/category/${label}`);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center text-center p-2 border-b-2 hover:text-slate-800 transition cursor-pointer}`}
    >
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </div>
  );
}

export default Category;
