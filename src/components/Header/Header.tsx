import HeaderButton from "./HeaderButton";

export default function Header(props: {
  value: string;
  api?: string;
  buttonName?: string;
}) {
  return (
    <div className="flex justify-between items-center mb-5">
      <span className="text-2xl font-bold">{props.value}</span>
      {props.api && (
        <HeaderButton api={props.api} value={props.buttonName || ""} />
      )}
    </div>
  );
}
