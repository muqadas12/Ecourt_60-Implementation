import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
class ViewNotification extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
                Id: 2,
                Subject: 'Hearing date',
                StartTime: new Date(2020, 11, 16, 10),//based on the selected data we can set start and end time

                EndTime: new Date(2020, 11, 16, 12),//[11-> december],[15->date],[10->time]
                IsAllDay: false,
                Status: 'Completed',
                Priority: 'High'
            }];
    }
    render() {
       
            return <ScheduleComponent height='450px' selectedDate={new Date(2020, 11, 16)} eventSettings={{ dataSource: this.data,
                fields: {
                    id: 'Id',
                    subject: { name: 'Subject' },
                    isAllDay: { name: 'IsAllDay' },
                    startTime: { name: 'StartTime' },
                    endTime: { name: 'EndTime' }
                }
            }}>
                
         <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>

                </ScheduleComponent>
       
        // return <ScheduleComponent height='450px' selectedDate={new Date(2020, 1, 15)} eventSettings={{ dataSource: this.data,
        //     fields: {
        //         id: 'Id',
        //         subject: { name: 'Subject' },
        //         isAllDay: { name: 'IsAllDay' },
        //         startTime: { name: 'StartTime' },
        //         endTime: { name: 'EndTime' }
        //     }
        // }}>
       
    }
}
;
export default ViewNotification;
