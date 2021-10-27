import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import classes from "./ServiziSection.module.scss";
import Title from "components/title/Title";
import CardServizi from "components/card-servizi/Card";
import Image from 'next/image';
import Link from 'next/link';

const ServiziSection = (sezDefault) => {

    const router = useRouter();


    return (
        <div className={`section ${classes.sectionServizi} `} >
            <div className={classes.content}>
                <h1 className={classes.titleSection}> Servizi </h1>

                <div className={classes.cardGrid}>
                    <div className={classes.cardContainer}>
                        <CardServizi title="App Mobile"

                            showButton={true} buttonText="scopri"
                            onClick={() => router.push('/servizi/Appmobile')}

                        >

                            <a style={{ cursor: 'pointer' }} onClick={() => router.push('/servizi/Appmobile')}>
                                <img src="/servizi/app_mobile.jpg" className="img-fluid rounded" alt="CREAZIONE APP MOBILE " />
                            </a>
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="DataBase Management"
                            onClick={() => router.push('/servizi/DatabaseManagement') }
                            showButton={true} buttonText="scopri"

                        >
                            <a style={{ cursor: 'pointer' }} onClick={() => router.push('/servizi/DatabaseManagement')}>
                                <img src="/servizi/db_management.jpg" className="img-fluid rounded" alt="DB LEAD MANAGEMENT" />
                            </a>
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="Enterprise Resource Planning"
                            showButton={true} buttonText="scopri"
                            onClick={() => router.push('/servizi/Enterprise')}

                        >
                            <a style={{ cursor: 'pointer' }} onClick={() => router.push('/servizi/Enterprise')}>
                                <img src="/servizi/erp.jpg" className="img-fluid rounded" alt="ERP ENTERPRISE" />
                            </a>
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="IT Security"
                            onClick={() => router.push('/servizi/Itsecurity')}
                            showButton={true} buttonText="scopri"
                        >
                            <a style={{ cursor: 'pointer' }} onClick={() => router.push('/servizi/Itsecurity')}>
                                <img src="/servizi/it_security.jpg" className="img-fluid rounded" alt="IT SECURITY SICUREZZA" />
                            </a>
                        </CardServizi>
                    </div>                    <div className={classes.cardContainer}>
                        <CardServizi title="Sviluppo Software"
                            onClick={() => router.push('/servizi/SviluppoSoftware')}
                            showButton={true} buttonText="scopri"
                        >
                            <a style={{ cursor: 'pointer' }} onClick={() => router.push('/servizi/SviluppoSoftware')}><img src="/servizi/sviluppo_software.jpg" className="img-fluid rounded" alt="SVILUPPO SOFTWARE" /></a>

                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="System Integration"
                            href="/servizi_Enterprise"
                            showButton={true} buttonText="scopri"
                            onClick={() => router.push('/servizi/SystemIntegration')}
                        >
                             <a style={{ cursor: 'pointer' }} onClick={() => router.push('/servizi/SystemIntegration')}>
                            <img src="/servizi/system_integration_mc.png" className="img-fluid rounded" alt="SYSTEM INTEGRATION MICROSOFT CERTIFIED" />
                            </a>
                        </CardServizi>
                    </div>
                </div>

            </div>
            <div className="barGrey"></div>
        </div>
    );
}

export default ServiziSection;