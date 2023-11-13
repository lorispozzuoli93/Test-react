import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledAccordion = styled(Accordion)(() => ({
    width: '40px',
    background: '#FFF',
    borderRadius: '12px',
}))

const week = [
    "1",
];

const CollapseButtonFooter: React.FC = () => {
    const [openDay, setOpenDay] = React.useState("");

    function handleAccordClick(day: React.SetStateAction<string>) {
        if (openDay === day) setOpenDay("");
        if (openDay !== day) setOpenDay(day);
    }

    return (
        <div>
            {week.map((day) => (
                <StyledAccordion
                    expanded={day === openDay}
                    onClick={() => handleAccordClick(day)}
                    key={day}
                >
                    <AccordionSummary>
                        {day}
                        {openDay ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </AccordionSummary>
                    <AccordionDetails>{`${day}`}</AccordionDetails>
                </StyledAccordion>
            ))}
        </div>
    )
}

export default CollapseButtonFooter