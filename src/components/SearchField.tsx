import { ChangeEvent, FC, useCallback } from "react";

type Props = {
  onSearch: (value: string) => void;
  onClear: () => void;
}

export const SearchField: FC<Props> = ({ onSearch, onClear }) => {
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) {
      onSearch(e.target.value)
    }

    if (e.target.value === '') {
      onClear()
    }
  }, [onSearch, onClear])


  return (
    <div>
      Please type here to search for the jobs you would like to find:
      <form>
        <label htmlFor="search">Search:
          <input onChange={onChange} type='text' id={'search'} name='search' />
        </label>
      </form>
    </div >
  )
}