interface Props {
   label: string;
   value: string;
}

const Stats = ({ label, value }: Props) => {
   return (
      <span className="px-4 py-2 flex flex-col shadow bg-transparent border border-dragon-500 rounded">
         <strong className="">{label}</strong>
         {value}
      </span>
   );
};

export default Stats;
