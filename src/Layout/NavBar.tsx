import React from "react";
import Link from "next/link";

interface Props {
  children: JSX.Element | JSX.Element[];
}
function NavBar({ children }: Props) {
  return (
    <>
      <div className="vertical-nav bg-white" id="sidebar">
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <img
              src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png"
              alt="..."
              width="65"
              className="mr-3 rounded-circle img-thumbnail shadow-sm"
            />
            <div className="media-body">
              <h4 className="m-0">Jason Doe</h4>
              <p className="font-weight-light text-muted mb-0">Web developer</p>
            </div>
          </div>
        </div>

        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
          Main
        </p>

        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <Link href={"/bubble-sort"}>
              <a href="#" className="nav-link text-dark font-italic bg-light">
                <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                Bubble Sort
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/selection-sort"}>
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                Selection Sort
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              Gallery
            </a>
          </li>
        </ul>

        <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
          Charts
        </p>

        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-area-chart mr-3 text-primary fa-fw"></i>
              Area charts
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
              Bar charts
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
              Pie charts
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-line-chart mr-3 text-primary fa-fw"></i>
              Line charts
            </a>
          </li>
        </ul>
      </div>

      <div className="page-content p-5" id="content">
        {" "}
        {children}
      </div>
    </>
  );
}

export default NavBar;
