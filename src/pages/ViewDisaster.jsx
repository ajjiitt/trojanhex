import React from "react";
import SupplyRequest from "../SubComponents/SupplyRequest";
const ViewDisaster = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const color = "footer-darkblue";
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <ul
            className="flex mb-0 list-none flex-col pt-3 pb-4 sm:flex-row w-9/12 mx-auto gap-3"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-" + color + " bg-white"
                    : "text-white bg-" + color)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Supply Request
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-" + color + " bg-white"
                    : "text-white bg-" + color)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Demand Request
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-" + color + " bg-white"
                    : "text-white bg-" + color)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Ground Authorities
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <SupplyRequest/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  Demand Request
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  Ground authorities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDisaster;
