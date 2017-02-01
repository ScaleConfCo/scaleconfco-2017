import React, { PropTypes, Component } from 'react'
import ReadMore from '../components/ReadMore'

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
    title: "Building Bridges with Effective Devops",
    speaker: "Katherine Daniels (ETSY)",
    description: "Devops originally started as a way of enabling both developers and operations engineers to work better together, but over the years since its inception it's become much more than that. The principles of devops can be beneficial to everyone involved in creating software solutions, not just two teams. This talk will discuss practical ideas for how the four pillars of effective devops can be used throughout an organization, and the benefits of spreading operational thinking further than just the ops team."
  },
  {
    hour: "10:10 AM",
    title: "Web scale envy",
    speaker: "Yuji Kiriki (S4N)",
    description: "Many teams run into trouble because they have chosen complex tools/frameworks/architectures because they 'might need to scale'. Companies such as Twitter and Netflix need to be able to support extreme loads and so need these architectures. Does your product really need them?"
  },
  {
    hour: "10:45 AM",
    title: "Data-driven Postmortems",
    speaker: "Jason Yee (Datadog)",
    description: "The DevOps movement has changed the way we build applications and infrastructure. It's also allowed us to scale larger than ever before. But along with larger scale comes increased complexity and more risk of failure. It's impossible to avoid failure, but the key to operating successfully at scale comes from how quickly you can detect failure, respond to it, resolve it and ultimately learn from it."
  },
  {
    hour: "11:20 AM",
    title: "Break"
  },
  {
    hour: "11:40 AM",
    title: "Distributed systems in practice, in theory",
    speaker: "Aysylu Greenberg (Google)",
    description: "Modern systems in production rely on decades of computer science research. Over time, new architectural patterns emerge that enable more resilient and robust systems. In this talk, we'll discuss some of these patterns from systems I've worked on at Google and the related work that provide insights into the motivations behind them."
  },
  {
    hour: "12:15 PM",
    title: "Introduccion a los Schedulers",
    speaker: "Carlos León (Container Solutions)",
    description: "La coordinación manual de recursos computacionales en nuestros datacenters es una actividad bastante compleja. No solo requiere tener un mapa mental del estado actual del sistema, también requiere la coordinación entre distintos equipos para evitar colisiones a la hora de asegurar cierto pedazo de la infraestructura."
  },
  {
    hour: "12:50 PM",
    title: "Conference photo"
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
    speaker: "Sergio Aristizibal Gomez (Twilio Inc.)",
    description: "Internet has evolved in different and sometimes unexpected ways since its inception. Also, we have seen changes in the infrastructure that supports the web and how we use it, from static data centers, to cloud computing and decentralized systems. Distributed computing, on the other hand, is often associated with academy or research projects, with low potential to be used on production. However, the raise of distributed systems like BitTorrent, Git and Bitcoin is opening a new path for *real* distributed computing for everyone. "
  },
  {
    hour: "3:35 PM",
    title: "Break"
  },
  {
    hour: "3:55 PM",
    title: "Configuration Management for Legacy Services at Scale",
    speaker: "Sally Lehman (Auth0)",
    description: "In the real world it is a luxury to be able start configuration management of services from scratch. Much more difficult, and unfortunately much more common, is the need to turn existing production environments from 'pets' to 'cattle'. Because 'pets' are by definition harder to predict and cannot be easily duplicated, changing them into cattle can be quite challenging and a resource hog."
  },
  {
    hour: "4:30 PM",
    title: "What is DevOps",
    speaker: "Armon Dadgar (Hashicorp)",
    description: "Most startups are in a race, either against competitors or burn rates to deliver products. This demands an increased focus on agility of delivery, which is a perfect fit for DevOps. In this talk, we discuss what DevOps is, and how it affects the people, processes, and tools used to deliver an app. Specifically, we discuss DevOps as a process for delivering software, and optimizing for agility instead of risk. DevOps applies to startups as well as Fortune 500's, and we will cover some pragmatic ways to get started and add value without getting caught up with all the shiny new tools."
  },
  {
    hour: "5:05 PM",
    title: "To be announced",
    speaker: "Jessie Frazelle (Google)"
  },
  {
    hour: "5:40 PM",
    title: "Closing remarks"
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
        <div className="ml4 white open-sans lh-copy">
          <ReadMore>
            {description}
          </ReadMore>
        </div>
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
  schedule: PropTypes.array.isRequired
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
