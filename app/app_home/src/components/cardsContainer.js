"use strict;"

import React from 'react';
import { ApplicationCard } from './applicationCard';
import { ApplicationsContext } from '../contexts';

export function CardsContainer() {

    const context = React.useContext(ApplicationsContext);

    const featured = context.applications.filter(x => x.featured) || [];

    const applications = context.applications.filter(x => !x.featured) || [];

    return (
        <>
            {(featured.length > 0 || applications.length > 0) &&
                <div id="applicationsContainer">
                    <div className="card-columns">
                        {featured.map(application => <ApplicationCard key={`featured_${application.folder}`} condition={application.active} application={application}/>)}
                    </div>
                    <div className="card-columns">
                        {applications.map(application => <ApplicationCard key={application.folder} condition={application.active} application={application} />)}
                    </div>
              </div>
            }
        </>
    )
}
