import React, { PropTypes, Component } from 'react'

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
    hour: "8:30 AM",
    title: "Registration"
  },
  {
    hour: "9:15 AM",
    title: "Opening words"
  },
  {
    hour: "9:35 AM",
    title: "To be announced",
    speaker: "Katherine Daniels (ETSY)"
  },
  {
    hour: "10:10 AM",
    title: "Web scale envy",
    speaker: "Yuji Kiriki (S4N)"
  },
  {
    hour: "10:45 AM",
    title: "Data-driven Postmortems",
    speaker: "Jason Yee (Datadog)"
  },
  {
    hour: "11:20 AM",
    title: "Break"
  },
  {
    hour: "11:40 AM",
    title: "Distributed systems in practice, in theory",
    speaker: "Aysylu Greenberg (Google)"
  },
  {
    hour: "12:!5 AM",
    title: "Introduccion a los Schedulers",
    speaker: "Carlos León (Container Solutions)"
  },
  {
    hour: "12:50 PM",
    title: "Photo"
  },
  {
    hour: "1:10 PM",
    title: "Lunch"
  },
  {
    hour: "2:25 PM",
    title: "Addressing experience and acquiring proficiency/expertness in a rapidly-expanding and ever-moving industry",
    speaker: "Carmen Hernandez (TravisCI)"
  },
  {
    hour: "3:00 PM",
    title: "Distributed computing with Ethereum and IPFS",
    speaker: "Sergio Aristizibal Gomez (Twilio Inc.)"
  },
  {
    hour: "3:35 PM",
    title: "Break"
  },
  {
    hour: "3:55 PM",
    title: "Configuration Management for Legacy Services at Scale",
    speaker: "Sally Lehman (Auth0)"
  },
  {
    hour: "4:30 PM",
    title: "What is DevOps",
    speaker: "Armon Dadgar (Hashicorp)"
  },
  {
    hour: "5:05 PM",
    title: "To be announced",
    speaker: "Jessie Frazelle (Google)"
  },
  {
    hour: "5:40 PM",
    title: "Closing marks"
  },
  {
    hour: "5:50 PM",
    title: "End"
  },
  {
    hour: "7:00 PM",
    title: "Closing event"
  }
]

const TimelineItem = ({ item }) => {
  const { hour, title, speaker, description } = item
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
      {
        description &&
        <p className="ml4 white open-sans">{description}</p>
      }
    </li>
  )
}

TimelineItem.propTypes = {
  item: PropTypes.object.isRequired
}

const Timeline = ({ schedule }) => {
  return (
    <ul className="list relative pa0 timeline">
      {
        schedule.map((item, index) => <TimelineItem item={item} key={index} />)
      }
    </ul>
  )
}

Timeline.propTypes = {
  schedule: PropTypes.object.isRequired
}

const Day = ({ date, schedule, index }) => {
  return (
    <div className="flex-auto w-50-l">
      <div>
        <p className="bright-green ttu eau-bold f-1-75 mb1">Day { index }</p>
        <p className="white ttu eau-book f-1-125 mt0">{date}</p>
        <hr className="h-4 bg-bright-green b-n"/>
        <Timeline schedule={schedule} />
      </div>
    </div>
  )
}

Day.propTypes = {
  date: PropTypes.string.isRequired,
  schedule: PropTypes.array.isRequired,
  index: PropTypes.string.isRequired
}

class Schedule extends Component {
  render() {
    return (
      <div className="mw80 center">
        <h2 className="ttu bright-green eau-bold f-s-t">
          Schedule
        </h2>
        <div className="flex flex-wrap flex-row-ns">
          <Day date="March 24" schedule={day1} index={"1"} />
          <Day date="March 25" schedule={day2} index={"2"} />
        </div>
      </div>
    )
  }
}

export default Schedule
