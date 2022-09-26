import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'




const typeOfTicket = [
  { id: 1, name: 'Vuxen' },
  { id: 2, name: 'Barn' },
  { id: 3, name: 'Student' },
  { id: 5, name: 'Senior' },
]

export default function Home() {
  return (
    <div className="h-full ">
      <div className="pt-[50px] pb-[400px] bg-[url('/background.jpeg')] bg-cover bg-center  bg-no-repeat">
        <a className="text-white font-bold text-[25px] ml-36 ">Sök resa</a>

        <div className="mt-8 grid grid-cols-2 items-center w-full">
          <div className="w-[100px] ml-10 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
            Till        </div>
          <div className="w-[100px] ml-10 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
            Från        </div>
        </div>
        <div className="grid mt-4 grid-cols-2 items-center w-full">
          <div className="w-[150px] ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
            Datum utresa        </div>


          <div className="w-[150px] ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
            Datum hemresa        </div>
        </div>
        <div className="mt-5">
          <MyListBox />
          <button className="text-white text-[12px] ml-4 ">+ Lägg till resenär</button>
        </div>
      </div>
    </div>
  )
}

function MyListBox() {
  const [selected, setSelected] = useState(typeOfTicket[0])

  return (
    <div className="ml-4 bg-gray-400 rounded text-white mr-5">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-grey  pr-10 text-center shadow-md focus:outline-none   focus-visible:ring-offset-slate-300 ">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">

              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-400 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {typeOfTicket.map((type, typeIdx) => (
                <Listbox.Option
                  key={typeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none  pl-8 pr-4 ${active ? 'bg-gray-600 text-white' : 'text-white'
                    }`
                  }
                  value={type}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {type.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
