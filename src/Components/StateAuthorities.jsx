import React, { useState, useEffect } from 'react'
import { intializeMasterContract } from '../Utils/connectWallet';

const StateAuthorities = () => {
  
  const [stateArr, setStateArr] = useState([]);

  const contract = intializeMasterContract();

  const fetchState = async () => {
    const state = await contract.methods.getStateData().call();
    setStateArr(state);
    console.log(state);
  }

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <div>
      <p className="font-semibold text-center text-2xl">State AUTHORITIES</p>
      <div className="flex flex-col md:w-full justify-center items-center mx-auto overflow-hidden">
        <div class="overflow-x-auto relative shadow-xl sm:rounded-lg mb-5">
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="py-3 px-6">
                  #
                </th>
                <th scope="col" class="py-3 px-6">
                  Authority Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {stateArr.map((ele, index) => (
                <tr class="bg-white border-b " key={index}>
                  <th
                    scope="row"
                    class="py-4 px-6 text-footer-darkblue"
                  >
                   {index + 1}
                  </th>
                  <td class="py-4 px-6 text-footer-darkblue">
                    {ele.stateAddress}
                  </td>
                  <td class="py-4 px-6 text-footer-darkblue">
                    {ele.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StateAuthorities