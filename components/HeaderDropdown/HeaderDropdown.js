import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAreaChart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function HeaderDropdown(props) {
  const { tab, dropdownVisible } = props;

  return (
    <div
      className={`header-dropdown ${dropdownVisible ? 'dropdown--active' : ''}`}
    >
      <div
        data-tab={'features'}
        className={`${
          tab === 'features' ? 'content-active' : ''
        } dropdown-content`}
      >
        <div className="dropdown-left  left-box--text">
          <p className="dropdown__header grid-col-span-3">
            Explore the features that help your team succeed
          </p>
          <div className="left-box hover:bg-blue-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Views</p>
            <p className="left-box--text dropdown__text">
              View your team's projects from every angle.
            </p>
          </div>
          <div className="left-box hover:bg-green-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Automation</p>
            <p className="left-box--text dropdown__text">
              Automate tasks and workflows with Butler automation.
            </p>
          </div>
          <div className="left-box hover:bg-red-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Power-Ups</p>
            <p className="left-box--text dropdown__text">
              Power up your teams by linking their favorite tools with Trello
              plugins.
            </p>
          </div>
          <div className="left-box hover:bg-violet-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Templates</p>
            <p className="left-box--text dropdown__text">
              Give your team a blueprint for success with easy-to-use templates
              from industry leaders and the Trello community.
            </p>
          </div>
          <div className="left-box hover:bg-orange-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Integrations</p>
            <p className="left-box--text dropdown__text">
              Find the apps your team is already using or discover new ways to
              get work done in Trello.
            </p>
          </div>
        </div>
        <div className="dropdown-right bg-violet-100">
          <p className=" right-1 dropdown__header">Meet Trello</p>
          <p className="right-box right-2 dropdown__text  mt-2">
            {
              ' Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, Trello can help keep things organized. It’s simple – sign-up, create a board, and you’re off! Productivity awaits.'
            }
          </p>
          <div className="right-box right-3">
            <button className="right-box--btn">Check out Trello</button>
          </div>
        </div>
      </div>

      <div
        data-tab={'solutions'}
        className={`${
          tab === 'solutions' ? 'content-active' : ''
        } dropdown-content`}
      >
        <div className="dropdown-left  left-box--text">
          <p className="dropdown__header grid-col-span-3">
            Take a page out of these pre-built Trello playbooks designed for all
            teams
          </p>
          <div className="left-box hover:bg-blue-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Marketing teams</p>
            <p className="left-box--text dropdown__text">
              Whether launching a new product, campaign, or creating content,
              Trello helps marketing teams succeed.
            </p>
          </div>
          <div className="left-box hover:bg-green-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Product Management</p>
            <p className="left-box--text dropdown__text">
              Use Trello&apos;s management boards and roadmap features to
              simplify complex projects and processes.
            </p>
          </div>
          <div className="left-box hover:bg-red-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Engineering teams</p>
            <p className="left-box--text dropdown__text">
              Ship more code, faster, and give your developers the freedom to be
              more agile with Trello.
            </p>
          </div>
          <div className="left-box hover:bg-violet-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Design teams</p>
            <p className="left-box--text dropdown__text">
              Empower your design teams by using Trello to streamline creative
              requests and promote more fluid cross-team collaboration.
            </p>
          </div>
          <div className="left-box hover:bg-orange-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Startups</p>
            <p className="left-box--text dropdown__text">
              From hitting revenue goals to managing workflows, small businesses
              thrive with Trello.
            </p>
          </div>
          <div className="left-box hover:bg-teal-100">
            <FontAwesomeIcon
              className="left-box--icon text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Remote teams</p>
            <p className="left-box--text dropdown__text">
              Keep your remote team connected and motivated, no matter where
              they&apos;re located around the world.
            </p>
          </div>
          <span className="flex flex-row self-end items-center gap-3 group  !w-2/3 cursor-pointer">
            See all teams{' '}
            <FontAwesomeIcon
              className="text-blue-500 left-box--icon group-hover:translate-x-2 transition-all duration-200"
              icon={faArrowRight}
            />
          </span>
        </div>
        <div className="dropdown-right bg-violet-100">
          <p className=" right-1 dropdown__header">Our proudct in action</p>
          <div className="right-box flex flex-col justify-between mt-2">
            <div className="flex flex-col w-full ">
              <span className="flex flex-row gap-2 group cursor-pointer">
                <h2 className="left-box--title">
                  Use Case: Project Management
                </h2>
                <FontAwesomeIcon
                  className="text-blue-500 left-box--icon invisible group-hover:visible transition-all duration-100"
                  icon={faArrowRight}
                />{' '}
              </span>
              <p className="dropdown__text">
                Keep tasks in order, deadlines on track, and team members
                aligned with Trello.
              </p>
            </div>
            <div className="flex flex-col w-full ">
              <span className="flex flex-row gap-2 group cursor-pointer pt-2">
                <h2 className="left-box--title">
                  Use Case: Project Management
                </h2>
                <FontAwesomeIcon
                  className="text-blue-500 left-box--icon invisible group-hover:visible transition-all duration-100"
                  icon={faArrowRight}
                />{' '}
              </span>
              <p className="dropdown__text">
                Keep tasks in order, deadlines on track, and team members
                aligned with Trello.
              </p>
            </div>
            <div className="flex flex-col w-full ">
              <span className="flex flex-row gap-2 group cursor-pointer pt-2">
                <h2 className="left-box--title">
                  Use Case: Project Management
                </h2>
                <FontAwesomeIcon
                  className="text-blue-500 left-box--icon invisible group-hover:visible transition-all duration-100"
                  icon={faArrowRight}
                />{' '}
              </span>
              <p className="dropdown__text">
                Keep tasks in order, deadlines on track, and team members
                aligned with Trello.
              </p>
            </div>
          </div>
          <span className=" flex flex-row self-end items-center gap-3 group  !w-2/3 cursor-pointer">
            See all solutions{' '}
            <FontAwesomeIcon
              className="text-blue-500 left-box--icon group-hover:translate-x-2 transition-all duration-200"
              icon={faArrowRight}
            />
          </span>
        </div>
      </div>
      <div
        data-tab={'plans'}
        className={`${
          tab === 'plans' ? 'content-active' : ''
        } dropdown-content`}
      >
        <div className="dropdown-left !h-min  left-box--text ">
          <div className="left-box h-32 bg-cyan-50">
            <FontAwesomeIcon
              className="left-box--icon text-cyan-400 text-sm w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Standard</p>
            <p className="left-box--text dropdown__text">
              For teams that need to manage more work and scale collaboration.
            </p>
          </div>
          <div className="left-box bg-pink-50">
            <FontAwesomeIcon
              className="left-box--icon text-sm text-pink-400 w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Premium</p>
            <p className="left-box--text dropdown__text">
              Best for teams up to 100 that need to track multiple projects and
              visualize work in a variety of ways.
            </p>
          </div>
          <div className="left-box bg-blue-50">
            <FontAwesomeIcon
              className="left-box--icon text-sm text-blue-600 w-4"
              icon={faAreaChart}
            ></FontAwesomeIcon>
            <p className="left-box--title">Enterprise</p>
            <p className="left-box--text dropdown__text">
              Everything your enterprise teams and admins need to manage
              projects.
            </p>
          </div>
          <div className="grid-col-span-3 bg-yellow-50 flex flex-row items-center justify-between px-10 h-32 mt-4 rounded-md">
            <div className="flex flex-col gap-2">
              <span className="flex flex-row gap-2">
                <FontAwesomeIcon
                  className="left-box--icon text-sm text-yellow-500 w-4"
                  icon={faAreaChart}
                ></FontAwesomeIcon>
                <h2 className="left-box--title">Free Plan</h2>
              </span>
              <p className="dropdown__text !w-full">
                For individuals or small teams looking to keep work organized
              </p>
            </div>
            <button className="right-box--btn border-yellow-500 hover:bg-yellow-50">
              Tour Trello
            </button>
          </div>
        </div>
        <div className="dropdown-right bg-violet-100">
          <p className=" right-1 dropdown__header">Compare Plans & Pricing</p>
          <p className="right-box right-2 dropdown__text  mt-2">
            "Whether you&apos;re a team of 2 or 2,000, Trello&apos;s flexible
            pricing model means you only pay for what you need."
          </p>
          <div className="right-box right-3">
            <button className="right-box--btn">View Pricing</button>
          </div>
        </div>
      </div>
      <div
        data-tab={''}
        className={`${tab == '' ? 'content-active' : ''} dropdown-content`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <h1>Under Construction 👷‍♂️</h1>
        </div>
      </div>
    </div>
  );
}
