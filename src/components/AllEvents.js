import { EventBar } from "./EventBar";
export function AllEvents(Props)
{
    {/*
        this is the body of start menu

    */}
return(
    <>
        <EventBar  details={{eventName:"Event Name",
                eventId:"001",
                eventDetails:"details",
                cordinatorName:"john doe",
                cordinatorNumber:"+91 99999999999999",
                eventIns:"Instructions",
                eventRules:[
                    "rule1",
                    "rule2",
                    "rule3"
                ]
            }
            } />

        <EventBar  details={{eventName:"Event Name2",
                eventId:"002",
                eventDetails:"details",
                cordinatorName:"Lorem epson",
                cordinatorNumber:"+91 35747564",
                eventIns:"Instructions",
                eventRules:[
                    "rule1",
                    "rule2",
                    "rule3"
                ]
            }
            } />
        <EventBar  details={{eventName:"Event Name",
            eventId:"003",
            eventDetails:"details",
            cordinatorName:"Mary sue",
            cordinatorNumber:"+91 937594357",
            eventIns:"Instructions",
            eventRules:[
                "rule1",
                "rule2",
                "rule3"
            ]
        }
        } />

    </>

);

}