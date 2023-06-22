import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.scss'
import { Link } from 'react-router-dom'
import { FaGlobeAfrica, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { TbJumpRope } from "react-icons/tb";
import { FaCity, FaBiking } from "react-icons/fa";
import { GiWorld, GiHiking, GiHuntingHorn, GiDeer } from "react-icons/gi";
import { MdSailing, MdScubaDiving } from "react-icons/md";
import Range from '../../../components/Site/Range/Range'


export default function SimpleAccordion() {
  return (
    <div>
      {/* first */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='f-icon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='f-title'><strong>Select Region</strong></Typography>
        </AccordionSummary>
        <AccordionDetails className='f-details'>
          <Typography className='f-detail'>
            <ul>
              <li>
                <FaGlobeAfrica className='f-acc-icon' />
                <Link className='f-acc-region'>
                  Africa
                </Link>
              </li>
              <li>
                <FaGlobeAsia className='f-acc-icon' />
                <Link className='f-acc-region'>
                  Asia
                </Link>
              </li>
              <li>
                <FaGlobeEurope className='f-acc-icon' />
                <Link className='f-acc-region'>
                  Europe
                </Link>
              </li>
              <li>
                <GiWorld className='f-acc-icon' />
                <Link className='f-acc-region'>
                  World
                </Link>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>


      {/* second */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='s-icon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='s-title'><strong>Activity Theme</strong></Typography>
        </AccordionSummary>
        <AccordionDetails className='s-details'>
          <Typography className='s-detail'>
            <ul>
              <Link>
                <li>
                  <TbJumpRope className="s-acc-icon" />
                  <span className='icon-title'>BUNGEE JUMP</span>
                </li>
              </Link>
              <Link>
                <li>
                  <FaCity className="s-acc-icon" />
                  <span className='icon-title'>CITY TOURS</span>
                </li>
              </Link>
              <Link>
                <li>
                  <GiHiking className="s-acc-icon" />
                  <span className='icon-title'>HIKING TRIPS</span>
                </li>
              </Link>
              <Link>
                <li>
                  <GiHuntingHorn className="s-acc-icon" />
                  <span className='icon-title'>HUNTING TRIP</span>
                </li>
              </Link>
              <Link>
                <li>
                  <FaBiking className="s-acc-icon" />
                  <span className='icon-title'>MOUNTAIN BIKING</span>
                </li>
              </Link>
              <Link>
                <li>
                  <MdSailing className="s-acc-icon" />
                  <span className='icon-title'>SAILING TRIPS</span>
                </li>
              </Link>
              <Link>
                <li>
                  <MdScubaDiving className="s-acc-icon" />
                  <span className='icon-title'>SCUBA DIVING</span>
                </li>
              </Link>
              <Link>
                <li>
                  <GiDeer className="s-acc-icon" />
                  <span className='icon-title'>WILDLIFE SAFARI</span>
                </li>
              </Link>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* third */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='t-icon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='t-title'><strong>Price Range</strong></Typography>
        </AccordionSummary>
        <AccordionDetails className='t-details'>
          <Typography className='t-detail'>
              <Range />
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
