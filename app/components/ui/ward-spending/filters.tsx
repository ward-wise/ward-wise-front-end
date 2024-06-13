"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function WardSelect() {
  const wards = Array.from({ length: 50 }, (_, index) =>
    (index + 1).toString()
  );

  return (
    <QueryDropDown
      label="Ward"
      queryParam="ward"
      options={wards}
      defaultValue="1"
    />
  );
}

export function YearSelect() {
  const years = Array.from({ length: 12 }, (_, index) =>
    (2023 - index).toString()
  );
  return (
    <QueryDropDown
      label=""
      queryParam="year"
      options={years}
      defaultValue="2023"
    />
  );
}

export function QueryDropDown({
  label,
  queryParam,
  options,
  defaultValue,
}: {
  label: string;
  queryParam: string;
  options: string[];
  defaultValue?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    const params = new URLSearchParams(searchParams);
    if (newValue) {
      params.set(queryParam, newValue);
    } else {
      params.delete(queryParam);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex items-baseline w-32">
      <label htmlFor={label} className="mx-4">
        {label}
      </label>
      <div className="relative">
        <select
          className="bg-white"
          value={searchParams.get(queryParam)?.toString() || defaultValue || ""}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
