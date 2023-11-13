import { FC } from 'react'
import { SvgIconProps } from "@mui/material";

export const CartIcon: FC<SvgIconProps> = () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_5339_15)">
            <rect x="16" y="8" width="40" height="40" fill="url(#pattern0)" shape-rendering="crispEdges" />
        </g>
        <defs>
            <filter id="filter0_d_5339_15" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0808989 0 0 0 0 0.0910112 0 0 0 0 0.819101 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5339_15" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5339_15" result="shape" />
            </filter>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_5339_15" transform="scale(0.00641026)" />
            </pattern>
            <image id="image0_5339_15" width="156" height="156" href="data:image/png;base64,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" />
        </defs>
    </svg>
)

export const DashBoardIcon: FC<SvgIconProps> = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="grid/dashboard">
            <path id="Icon" d="M21 21.5H13V15.5H21V21.5ZM11 21.5H3V11.5H11V21.5ZM21 13.5H13V3.5H21V13.5ZM11 9.5H3V3.5H11V9.5Z" fill="#B7BAC8" />
        </g>
    </svg>
)

export const FolderIcon: FC<SvgIconProps> = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="file/folder">
            <path id="Icon" d="M20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V5.5C2 4.39543 2.89543 3.5 4 3.5H10C10.2652 3.5 10.5195 3.60545 10.707 3.793L12.414 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5ZM4 7.5V19.5H20V7.5H4Z" fill="#B7BAC8" />
        </g>
    </svg>
)

export const CalendarIcon: FC<SvgIconProps> = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="calendar/calendar">
            <path id="Icon" d="M19 22.5H5C3.89543 22.5 3 21.6046 3 20.5V6.5C3 5.39543 3.89543 4.5 5 4.5H7V2.5H9V4.5H15V2.5H17V4.5H19C20.1046 4.5 21 5.39543 21 6.5V20.5C21 21.6046 20.1046 22.5 19 22.5ZM5 10.5V20.5H19V10.5H5ZM5 6.5V8.5H19V6.5H5ZM17 18.5H15V16.5H17V18.5ZM13 18.5H11V16.5H13V18.5ZM9 18.5H7V16.5H9V18.5ZM17 14.5H15V12.5H17V14.5ZM13 14.5H11V12.5H13V14.5ZM9 14.5H7V12.5H9V14.5Z" fill="#B7BAC8" />
        </g>
    </svg>
)

export const GroupIcon: FC<SvgIconProps> = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="user/group_alt">
            <g id="Icon">
                <path d="M11 7.5C11 9.70914 9.20914 11.5 7 11.5C4.79086 11.5 3 9.70914 3 7.5C3 5.29086 4.79086 3.5 7 3.5C9.20914 3.5 11 5.29086 11 7.5ZM9 7.5C9 6.39543 8.10457 5.5 7 5.5C5.89543 5.5 5 6.39543 5 7.5C5 8.60457 5.89543 9.5 7 9.5C8.10457 9.5 9 8.60457 9 7.5Z" fill="#5D5FEF" />
                <path d="M21 12C21 13.933 19.433 15.5 17.5 15.5C15.567 15.5 14 13.933 14 12C14 10.067 15.567 8.5 17.5 8.5C19.433 8.5 21 10.067 21 12ZM19 12C19 11.1716 18.3284 10.5 17.5 10.5C16.6716 10.5 16 11.1716 16 12C16 12.8284 16.6716 13.5 17.5 13.5C18.3284 13.5 19 12.8284 19 12Z" fill="#5D5FEF" />
                <path d="M10 21.5V17.5C10 15.8431 8.65685 14.5 7 14.5C5.34315 14.5 4 15.8431 4 17.5V21.5H2V17.5C2 14.7386 4.23858 12.5 7 12.5C9.76142 12.5 12 14.7386 12 17.5V21.5H10Z" fill="#5D5FEF" />
                <path d="M20 21V21.5H22V21C22 18.5147 19.9853 16.5 17.5 16.5C15.0147 16.5 13 18.5147 13 21V21.5H15V21C15 19.6193 16.1193 18.5 17.5 18.5C18.8807 18.5 20 19.6193 20 21Z" fill="#5D5FEF" />
            </g>
        </g>
    </svg>
)

export const ArrowIcon: FC<SvgIconProps> = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="arrow/short_down">
            <path id="Icon" d="M11 16.17L7.41 12.59L6 14L12 20L18 14L16.59 12.59L13 16.17V4H11V16.17Z" fill="#7A8194" />
        </g>
    </svg>
)