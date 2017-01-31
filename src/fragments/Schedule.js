import React, { Component } from 'react'

const day1 = [
	{
		hour: "",
		title: "Registration",
    description: "Come pick up your badge and goodie bag, we have some surprises in store for you."
	},
  {
		hour: "",
		title: "Workshops",
    description: "Workshops to be announced soon. Stay tuned!"
	}
];

const day2 = [
  {
    hour: "",
    title: "Registration",
    description: "Come pick up your badge and goodie bag, we have some surprises in store for you. "
  },
  {
    hour: "",
    title: "Opening words",
    description: "It’s show time! Oficial welcome to the first tech conference on scalability in Colombia. Some opening words will be given by our organizer Juan David Castillo."
  },
  {
    hour: "",
    title: "Building Bridges with Effective Devops",
    speaker: "Katherine Daniels (ETSY)",
    description: "Devops originally started as a way of enabling both developers and operations engineers to work better together, but over the years since its inception it's become much ..."
  }
]

class TimelineItem extends Component {
  render() {
    const {
      hour,
      title,
      speaker,
      description
    } = this.props.item

    return (
      <li className="relative timeline-item h-100">
        {
          hour &&
          <time className="ml4 bright-green open-sans f-1-25">{hour}</time>
        }
        <p className="ml4 bright-green ttu eau-book f-4">{title}</p>
        {
          speaker &&
          <p className="ml4 bright-green ttu open-sans f-s-d">{speaker}</p>
        }
        <p className="ml4 white open-sans">{description}</p>
      </li>
    )
  }
}

class Timeline extends Component {
  render() {
    const { schedule } = this.props
    return (
      <ul className="list relative pa0 timeline">
        {
          schedule.map((item, index) => <TimelineItem item={item} key={index} />)
        }
      </ul>
    )
  }
}

class Day extends Component {
  render() {
    const {
      date,
      schedule,
      index
    } = this.props
    return (
      <div className="flex-auto w-50">
        <div>
          <p className="bright-green ttu eau-bold f-1-75 mb1">Day { index }</p>
          <p className="white ttu eau-book f-1-125 mt0">{date}</p>
          <hr className="h-4 bg-bright-green b-n"/>
          <Timeline schedule={schedule} />
        </div>
      </div>
    )
  }
}

class Schedule extends Component {
  render() {
    return (
      <div className="mw80 center">
        <h2 className="ttu bright-green eau-bold f-s-t">
          Schedule
        </h2>
        <div className="flex flex-wrap">
          <Day date="March 24" schedule={day1} index={"1"} />
          <Day date="March 25" schedule={day2} index={"2"} />
        </div>
      </div>
    )
  }
}

export default Schedule
