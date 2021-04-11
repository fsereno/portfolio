"use strict;"

import React from 'react';
import { ApplicationCard } from './applicationCard';
import { ApplicationsContext } from '../contexts';

export function CardsContainer() {

    const context = React.useContext(ApplicationsContext);

    const featured = context.applications.filter(x => x.featured);

    const applications = context.applications.filter(x => !x.featured);

    return (
        <>
            {applications.length > 0 &&
                <div id="applicationsContainer">
                    <div className="card-columns">
                        {featured.map(application => {
                            return ( <ApplicationCard
                                application={application}
                                condition={application.active && application.include} />
                            )
                        })}
                    </div>
                    <div className="card-columns">
                        {applications.map(application => {
                            return ( <ApplicationCard
                                application={application}
                                condition={application.active && application.include} />
                            )
                        })}
                    </div>
              </div>
            }
        </>
    )
}
