import React, { PropTypes, Component } from 'react'
import ReadMore from '../components/ReadMore'
import enhanceCollection from "phenomic/lib/enhance-collection"
import ScheduleData from '../assets/schedule/data'

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
        <p className="ml4 bright-green ttu open-sans f-s-d">{`${speaker.name} (${speaker.company})`}</p>
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
  static contextTypes = {
    collection: PropTypes.array,
  }

  render() {
    const { collection } = this.context
    const speakers = enhanceCollection(collection, {
      filter: { speaker: 'yes' }
    });

    const speakersData = speakers.reduce((data, speaker) => {
      data[speaker.twitter] = speaker
      return data;
    }, {})

    const newSchedule = Object.keys(ScheduleData).map(day => {
      return ScheduleData[day].map((session) => {
        if(session.speaker) {
          return {
            ...session,
            speaker: speakersData[session.speaker]
          }
        }
        return session
      })
    })

    return (
      <div className="mw80 center">
        <h2 className="ttu bright-green eau-bold f-s-t">
          Schedule
        </h2>
        <div className="flex flex-wrap flex-row-ns">
          <Day date="March 24" schedule={newSchedule[0]} index={"1"} />
          <Day date="March 25" schedule={newSchedule[1]} index={"2"} />

        </div>
      </div>
    )
  }
}

export default Schedule
