/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { JSONByScope, JSONObj } from "../helpers/parseToJson";

const lightAndDarkJSON: JSONObj = JSON.parse(
  `{"uitk": {"color": {"white": {"value": "rgb(255, 255, 255)"},"black": {"value": "rgb(0, 0, 0)"},"red": {"10": {"value": "rgb(255, 227, 224)"},"20": {"value": "rgb(255, 207, 201)"},"30": {"value": "rgb(255, 187, 178)"},"40": {"value": "rgb(255, 167, 156)"},"50": {"value": "rgb(255, 148, 133)"},"100": {"value": "rgb(255, 128, 111)"},"200": {"value": "rgb(255, 108, 88)"},"300": {"value": "rgb(255, 89, 66)"},"400": {"value": "rgb(237, 65, 42)"},"500": {"value": "rgb(227, 43, 22)"},"600": {"value": "rgb(196, 32, 16)"},"700": {"value": "rgb(166, 21, 11)"},"800": {"value": "rgb(136, 10, 5)"},"900": {"value": "rgb(106, 0, 0)"},"1000": {"value": "rgb(65, 37, 34)"}},"orange": {"10": {"value": "rgb(255, 232, 191)"},"20": {"value": "rgb(254, 223, 166)"},"30": {"value": "rgb(254, 214, 142)"},"40": {"value": "rgb(254, 205, 118)"},"50": {"value": "rgb(254, 197, 94)"},"100": {"value": "rgb(250, 181, 81)"},"200": {"value": "rgb(246, 165, 68)"},"300": {"value": "rgb(242, 149, 56)"},"400": {"value": "rgb(238, 133, 43)"},"500": {"value": "rgb(234, 115, 25)"},"600": {"value": "rgb(224, 101, 25)"},"700": {"value": "rgb(214, 85, 19)"},"800": {"value": "rgb(204, 68, 13)"},"900": {"value": "rgb(194, 52, 7)"},"1000": {"value": "rgb(54, 44, 36)"}},"green": {"10": {"value": "rgb(209, 244, 201)"},"20": {"value": "rgb(184, 232, 182)"},"30": {"value": "rgb(160, 221, 164)"},"40": {"value": "rgb(136, 210, 145)"},"50": {"value": "rgb(112, 199, 127)"},"100": {"value": "rgb(93, 189, 116)"},"200": {"value": "rgb(77, 180, 105)"},"300": {"value": "rgb(60, 171, 96)"},"400": {"value": "rgb(48, 156, 90)"},"500": {"value": "rgb(36, 135, 75)"},"600": {"value": "rgb(24, 114, 61)"},"700": {"value": "rgb(12, 93, 46)"},"800": {"value": "rgb(1, 73, 32)"},"900": {"value": "rgb(0, 57, 18)"},"1000": {"value": "rgb(35, 52, 43)"}},"teal": {"10": {"value": "rgb(218, 240, 240)"},"20": {"value": "rgb(199, 232, 232)"},"30": {"value": "rgb(180, 224, 225)"},"40": {"value": "rgb(162, 217, 218)"},"50": {"value": "rgb(141, 205, 209)"},"100": {"value": "rgb(123, 193, 200)"},"200": {"value": "rgb(99, 181, 192)"},"300": {"value": "rgb(73, 160, 172)"},"400": {"value": "rgb(48, 149, 166)"},"500": {"value": "rgb(0, 130, 151)"},"600": {"value": "rgb(27, 107, 133)"},"700": {"value": "rgb(0, 85, 113)"},"800": {"value": "rgb(1, 65, 86)"},"900": {"value": "rgb(0, 49, 76)"},"1000": {"value": "rgb(28, 55, 60)"}},"blue": {"10": {"value": "rgb(203, 231, 249)"},"20": {"value": "rgb(183, 222, 246)"},"30": {"value": "rgb(164, 213, 244)"},"40": {"value": "rgb(144, 204, 242)"},"50": {"value": "rgb(125, 195, 240)"},"100": {"value": "rgb(100, 177, 228)"},"200": {"value": "rgb(75, 159, 216)"},"300": {"value": "rgb(51, 141, 205)"},"400": {"value": "rgb(45, 129, 189)"},"500": {"value": "rgb(38, 112, 169)"},"600": {"value": "rgb(21, 92, 147)"},"700": {"value": "rgb(0, 71, 123)"},"800": {"value": "rgb(12, 53, 102)"},"900": {"value": "rgb(0, 40, 88)"},"1000": {"value": "rgb(35, 47, 56)"},"2000": {"value": "rgb(39, 60, 79)"}},"purple": {"10": {"value": "rgb(249, 224, 247)"},"20": {"value": "rgb(247, 212, 244)"},"30": {"value": "rgb(245, 201, 241)"},"40": {"value": "rgb(243, 189, 238)"},"50": {"value": "rgb(241, 178, 235)"},"100": {"value": "rgb(223, 156, 225)"},"200": {"value": "rgb(205, 135, 215)"},"300": {"value": "rgb(192, 116, 203)"},"400": {"value": "rgb(169, 97, 181)"},"500": {"value": "rgb(150, 78, 162)"},"600": {"value": "rgb(129, 60, 141)"},"700": {"value": "rgb(103, 46, 122)"},"800": {"value": "rgb(83, 37, 109)"},"900": {"value": "rgb(59, 16, 84)"},"1000": {"value": "rgb(58, 45, 62)"}},"grey": {"10": {"value": "rgb(242, 244, 246)"},"20": {"fade": {"40": {"value": "rgba(234, 237, 239, 0.4)"}}, "value": "rgb(234, 237, 239)"},"30": {"value": "rgb(224, 228, 233)"},"40": {"value": "rgb(217, 221, 227)"},"50": {"value": "rgb(206, 210, 217)"},"60": {"fade": {"40": {"value": "rgba(197, 201, 208, 0.4)"}}, "value": "rgb(197, 201, 208)"},"70": {"value": "rgb(180, 183, 190)"},"80": {"value": "rgb(159, 163, 170)"},"90": {"fade": {"20": {"value": "rgba(132, 135, 142, 0.2)"}}, "value": "rgb(132, 135, 142)"},"100": {"fade": {"20": {"value": "rgba(116, 119, 127, 0.2)"}}, "value": "rgb(116, 119, 127)"},"200": {"value": "rgb(97, 101, 110)"},"300": {"value": "rgb(76, 80, 91)"},"400": {"fade": {"40": {"value": "rgba(68, 72, 79, 0.4)"}}, "value": "rgb(68, 72, 79)"},"500": {"value": "rgb(59, 63, 70)"},"600": {"fade": {"40": {"value": "rgba(47, 49, 54, 0.4)"}}, "value": "rgb(47, 49, 54)"},"700": {"value": "rgb(42, 44, 47)"},"800": {"value": "rgb(36, 37, 38)"},"900": {"value": "rgb(22, 22, 22)"}}},"actionable": {"font": {"weight": {"value": "uitk-typography-weight-bold"}},"letter": {"spacing": {"value": "0.6px"}},"text": {"transform": {"value": "uppercase"},"align": {"value": "center"}},"cursor": {"hover": {"value": "pointer"},"active": {"value": "pointer"}},"border": {"radius": {"value": "0"}}},"container": {"border": {"width": {"value": "1px"},"style": {"value": "solid"},"radius": {"value": "0"}}},"delay": {"instant": {"value": "100"},"perceptible": {"value": "300"},"notable": {"value": "1000"},"cutoff": {"value": "10000"}},"disabled": {"cursor": {"value": "not-allowed"},"text": {"opacity": {"value": "0.7"}},"border": {"opacity": {"value": "0.4"}},"background": {"opacity": {"value": "0.4"}},"graphical": {"opacity": {"value": "0.4"}}},"draggable": {"cursor": {"hover": {"value": "grab"},"active": {"value": "grabbing"}},"box": {"shadow": {"value": "uitk-shadow-4"}}},"editable": {"cursor": {"hover": {"value": "text"},"active": {"value": "text"}},"border": {"size": {"hover": {"value": "1px"},"active": {"value": "2px"},"readonly": {"value": "1px"}, "value": "1px"}}},"focused": {"line": {"width": {"value": "2px"}},"border": {"style": {"value": "solid"},"warning": {"value": "*uitk-focused-borderStyle* *uitk-focused-line-width* *uitk-focused-color-warning* "},"error": {"value": "*uitk-focused-borderStyle* *uitk-focused-line-width* *uitk-focused-color-error* "}, "value": "*uitk-focused-borderStyle* *uitk-focused-line-width* *uitk-focused-color* "},"outline": {"style": {"value": "dotted"},"offset": {"value": "0"},"inset": {"value": "0px 0px 0px 0px"},"warning": {"value": "*uitk-focused-color-warning* *uitk-focused-outlineStyle* *uitk-focused-line-width* "},"error": {"value": "*uitk-focused-color-error* *uitk-focused-outlineStyle* *uitk-focused-line-width* "}, "value": "*uitk-focused-color* *uitk-focused-outlineStyle* *uitk-focused-line-width* "}},"navigable": {"font": {"weight": {"active": {"value": "uitk-typography-weight-semiBold"}}},"cursor": {"hover": {"value": "pointer"},"active": {"value": "pointer"}}},"overlayable": {"elevation": {"0": {"value": "uitk-shadow-0"},"1": {"value": "uitk-shadow-1"},"2": {"value": "uitk-shadow-2"},"3": {"value": "uitk-shadow-3"},"4": {"value": "uitk-shadow-4"},"5": {"value": "uitk-shadow-5"},"6": {"value": "uitk-shadow-6"}}},"ratable": {"cursor": {"hover": {"value": "grab"},"active": {"value": "pointer"}}},"selectable": {"cursor": {"hover": {"value": "pointer"},"active": {"value": "pointer"}},"default": {"text": {"align": {"value": "left"}}}},"separable": {"border": {"width": {"value": "1px"},"style": {"value": "solid"}}},"status": {"info": {"icon": {"color": {"value": "uitk-status-info-color"}},"border": {"color": {"value": "uitk-status-info-color"}}},"success": {"icon": {"color": {"value": "uitk-status-success-color"}},"border": {"color": {"value": "uitk-status-success-color"}}},"warning": {"icon": {"color": {"value": "uitk-status-warning-color"}},"border": {"color": {"value": "uitk-status-warning-color"}}},"error": {"icon": {"color": {"value": "uitk-status-error-color"}},"border": {"color": {"value": "uitk-status-error-color"}}}},"taggable": {"cursor": {"hover": {"value": "grab"},"active": {"value": "pointer"}}},"text": {"h1": {"font": {"size": {"touch": {"value": "36px"},"low": {"value": "32px"},"medium": {"value": "24px"},"high": {"value": "18px"}},"weight": {"strong": {"value": "uitk-typography-weight-extraBold"},"small": {"value": "uitk-typography-weight-medium"}, "value": "uitk-typography-weight-bold"}},"line": {"height": {"touch": {"value": "auto"},"low": {"value": "42px"},"medium": {"value": "31px"},"high": {"value": "24px"}}}},"h2": {"font": {"size": {"touch": {"value": "28px"},"low": {"value": "24px"},"medium": {"value": "18px"},"high": {"value": "14px"}},"weight": {"strong": {"value": "uitk-typography-weight-extraBold"},"small": {"value": "uitk-typography-weight-regular"}, "value": "uitk-typography-weight-semiBold"}},"line": {"height": {"touch": {"value": "36px"},"low": {"value": "32px"},"medium": {"value": "24px"},"high": {"value": "18px"}}}},"h3": {"font": {"size": {"touch": {"value": "18px"},"low": {"value": "18px"},"medium": {"value": "14px"},"high": {"value": "12px"}},"weight": {"strong": {"value": "uitk-typography-weight-extraBold"},"small": {"value": "uitk-typography-weight-regular"}, "value": "uitk-typography-weight-semiBold"}},"line": {"height": {"touch": {"value": "26px"},"low": {"value": "26px"},"medium": {"value": "22px"},"high": {"value": "16px"}}}},"h4": {"font": {"size": {"touch": {"value": "16px"},"low": {"value": "14px"},"medium": {"value": "12px"},"high": {"value": "11px"}},"weight": {"strong": {"value": "uitk-typography-weight-extraBold"},"small": {"value": "uitk-typography-weight-regular"}, "value": "uitk-typography-weight-semiBold"}},"line": {"height": {"touch": {"value": "22px"},"low": {"value": "18px"},"medium": {"value": "16px"},"high": {"value": "14px"}}}},"caption": {"font": {"size": {"touch": {"value": "12px"},"low": {"value": "11px"},"medium": {"value": "11px"},"high": {"value": "10px"}}},"line": {"height": {"touch": {"value": "16px"},"low": {"value": "14px"},"medium": {"value": "14px"},"high": {"value": "14px"}}}},"help": {"font": {"size": {"touch": {"value": "12px"},"low": {"value": "11px"},"medium": {"value": "11px"},"high": {"value": "10px"}}},"line": {"height": {"touch": {"value": "16px"},"low": {"value": "14px"},"medium": {"value": "14px"},"high": {"value": "13px"}}}},"font": {"size": {"touch": {"value": "16px"},"low": {"value": "14px"},"medium": {"value": "12px"},"high": {"value": "11px"}}},"line": {"height": {"touch": {"value": "22px"},"low": {"value": "18px"},"medium": {"value": "16px"},"high": {"value": "14px"}}}}},"font": {"family": {"value": "uitk-sans"}}}`
);
const lightJSON: JSONObj = JSON.parse(
  `{"uitk": {"color": {"blue": {"30": {"fade": {"99": {"value": "rgba(164, 213, 244, 0.99)"}}}}},"icon": {"primary": {"color": {"disabled": {"value": "rgba(97, 101, 110, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-200"}}},"shadow": {"0": {"value": "none"},"1": {"value": "0 1px 3px 0 rgba(0, 0, 0, 0.1)"},"2": {"value": "0 2px 4px 0 rgba(0, 0, 0, 0.1)"},"3": {"value": "0 4px 8px 0 rgba(0, 0, 0, 0.15)"},"4": {"value": "0 6px 10px 0 rgba(0, 0, 0, 0.2)"},"5": {"value": "0 8px 16px 0 rgba(0, 0, 0, 0.2)"},"6": {"value": "0 12px 40px 5px rgba(0, 0, 0, 0.3)"}},"accent": {"border": {"color": {"value": "uitk-color-blue-300"}},"background": {"value": "uitk-color-blue-500"},"text": {"color": {"value": "uitk-color-white"}}},"actionable": {"primary": {"text": {"color": {"hover": {"value": "uitk-color-grey-900"},"active": {"value": "uitk-color-white"},"disabled": {"value": "rgba(22, 22, 22, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-900"}},"background": {"hover": {"value": "uitk-color-grey-40"},"active": {"value": "uitk-color-grey-200"},"disabled": {"value": "rgba(197, 201, 208, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-60"},"icon": {"color": {"active": {"value": "uitk-color-white"},"hover": {"value": "uitk-color-grey-900"},"disabled": {"value": "rgba(22, 22, 22, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-900"}}},"cta": {"text": {"color": {"active": {"value": "uitk-color-white"},"hover": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}},"background": {"hover": {"value": "uitk-color-blue-500"},"active": {"value": "uitk-color-blue-700"},"disabled": {"value": "rgba(21, 92, 147, *uitk-opacity-foreground*)"}, "value": "uitk-color-blue-600"},"icon": {"color": {"hover": {"value": "uitk-color-white"},"active": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}}},"secondary": {"text": {"color": {"active": {"value": "uitk-color-white"},"hover": {"value": "uitk-color-grey-900"},"disabled": {"value": "rgba(22, 22, 22, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-900"}},"background": {"active": {"value": "uitk-color-grey-200"},"hover": {"value": "uitk-color-grey-40"},"disabled": {"value": "transparent"}, "value": "transparent"},"icon": {"color": {"active": {"value": "uitk-color-white"},"hover": {"value": "uitk-color-grey-900"},"disabled": {"value": "rgba(22, 22, 22, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-300"}}}},"container": {"background": {"value": "uitk-color-white"},"border": {"color": {"disabled": {"value": "uitk-color-grey-20-fade-40"}, "value": "uitk-color-grey-60"}}},"draggable": {"background": {"hover": {"value": "uitk-color-grey-40"},"active": {"value": "uitk-color-blue-500"}, "value": "uitk-color-grey-60"},"icon": {"hover": {"value": "uitk-color-grey-900"},"active": {"value": "uitk-color-white"}, "value": "uitk-color-grey-900"}},"dropTarget": {"background": {"hover": {"value": "uitk-color-blue-30"}, "value": "uitk-color-grey-20"},"icon": {"color": {"hover": {"value": "uitk-color-grey-200"}, "value": "uitk-color-grey-200"}},"border": {"value": "dashed 1px uitk-color-grey-60)"}},"editable": {"text": {"primary": {"value": "uitk-color-grey-900"},"secondary": {"value": "uitk-color-grey-200"}},"icon": {"color": {"hover": {"value": "uitk-color-grey-600"},"active": {"value": "uitk-color-grey-600"},"readonly": {"value": "transparent"}, "value": "uitk-color-grey-600"}},"border": {"color": {"hover": {"value": "uitk-color-blue-400"},"active": {"value": "uitk-color-blue-500"},"readonly": {"value": "uitk-color-grey-90-fade-20"}, "value": "uitk-color-grey-90"}},"selection": {"background": {"value": "uitk-color-blue-30-fade-99"}},"background": {"value": "uitk-color-white"}},"focused": {"color": {"warning": {"value": "uitk-color-orange-700"},"error": {"value": "uitk-color-red-500"}, "value": "uitk-color-blue-500"}},"measured": {"tick": {"color": {"value": "uitk-color-grey-100"}},"color": {"active": {"start": {"value": "uitk-color-teal-500"},"end": {"value": "uitk-color-blue-500"}, "value": "linear-gradient(0deg, *uitk-measured-gradient-start* 0%, *uitk-measured-gradient-stop* 100%)"}},"track": {"color": {"value": "uitk-color-grey-70"}},"font": {"size": {"value": "14px"}}},"navigable": {"indicator": {"color": {"hover": {"value": "uitk-color-grey-90"},"active": {"value": "uitk-color-orange-700"}}},"link": {"color": {"hover": {"value": "uitk-color-grey-400"},"active": {"value": "uitk-color-grey-900"}, "value": "uitk-color-grey-400"}},"border": {"value": "solid 1px uitk-color-grey-60)"},"background": {"hover": {"value": "uitk-color-grey-20"},"active": {"value": "none"}, "value": "none"}},"overlayable": {"scrim": {"background": {"value": "rgba(255, 255, 255, 0.8)"}}},"ratable": {"background": {"hover": {"value": "uitk-color-orange-700"},"active": {"value": "uitk-color-orange-700"},"undo": {"value": "transparent"}, "value": "transparent"},"border": {"hover": {"value": "transparent"},"active": {"value": "transparent"},"undo": {"value": "uitk-color-orange-700"}, "value": "uitk-color-grey-90"}},"selectable": {"text": {"color": {"hover": {"value": "uitk-color-grey-900"},"active": {"value": "uitk-color-white"},"blur": {"active": {"value": "uitk-color-grey-900"}}, "value": "uitk-color-grey-900"}},"icon": {"color": {"hover": {"value": "uitk-color-grey-300"},"active": {"value": "uitk-color-white"},"blur": {"active": {"value": "uitk-color-grey-300"}}, "value": "uitk-color-grey-300"}},"background": {"hover": {"value": "uitk-color-blue-30"},"active": {"value": "uitk-color-blue-500"},"blur": {"active": {"value": "uitk-color-grey-30"}}, "value": "uitk-color-white"},"border": {"hover": {"value": "solid 1px uitk-color-blue-500)"},"active": {"value": "solid 1px uitk-color-blue-500)"},"blur": {"active": {"value": "solid 1px transparent"}}, "value": "solid 1px uitk-color-grey-400)"},"stroke": {"selecting": {"value": "uitk-color-blue-500"},"selected": {"value": "transparent"},"partial": {"value": "uitk-color-grey-90"}, "value": "uitk-color-grey-90"},"fill": {"selecting": {"value": "transparent"},"selected": {"value": "uitk-color-blue-500"},"partial": {"value": "uitk-color-blue-500"}, "value": "transparent"}},"separable": {"border": {"color": {"value": "uitk-color-grey-40"}}},"status": {"info": {"color": {"value": "uitk-color-blue-500"},"background": {"value": "uitk-color-white"}},"success": {"color": {"value": "uitk-color-green-500"},"background": {"value": "uitk-color-white"}},"warning": {"color": {"value": "uitk-color-orange-700"},"background": {"value": "uitk-color-white"}},"error": {"color": {"value": "uitk-color-red-500"},"background": {"value": "uitk-color-white"}}},"taggable": {"background": {"hover": {"value": "uitk-color-grey-30"},"active": {"value": "uitk-color-grey-200"}, "value": "uitk-color-grey-40"},"text": {"color": {"hover": {"value": "uitk-color-grey-900"},"active": {"value": "uitk-color-white"}, "value": "uitk-color-grey-900"}},"icon": {"hover": {"value": "uitk-color-grey-300"},"active": {"value": "uitk-color-white"}, "value": "uitk-color-grey-300"},"stroke": {"value": "uitk-color-grey-100"}},"text": {"primary": {"color": {"disabled": {"value": "rgba(22, 22, 22, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-900"}},"secondary": {"color": {"disabled": {"value": "rgba(97, 101, 110, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-200"}},"growth": {"indicator": {"up": {"color": {"value": "uitk-color-green-500"}},"down": {"color": {"value": "uitk-color-red-500"}}}},"link": {"color": {"hover": {"value": "uitk-color-blue-500"},"active": {"value": "uitk-color-blue-500"},"disabled": {"value": "uitk-color-grey-900"}, "value": "uitk-color-grey-900"}},"font": {"size": {"value": "uitk-text-fontSize-medium"}}}}}`
);
const darkJSON: JSONObj = JSON.parse(
  `{"uitk": {"color": {"blue": {"700": {"fade": {"99": {"value": "rgba(0, 71, 123, 0.99)"}}}}},"icon": {"primary": {"color": {"disabled": {"value": "rgba(197, 201, 208, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-60"}}},"shadow": {"0": {"value": "none"},"1": {"value": "0 1px 3px 0 rgba(0, 0, 0, 0.5)"},"2": {"value": "0 2px 4px 0 rgba(0, 0, 0, 0.5)"},"3": {"value": "0 4px 8px 0 rgba(0, 0, 0, 0.55)"},"4": {"value": "0 6px 10px 0 rgba(0, 0, 0, 0.55)"},"5": {"value": "0 8px 16px 0 rgba(0, 0, 0, 0.6)"},"6": {"value": "0 12px 40px 5px rgba(0, 0, 0, 0.65)"}},"accent": {"border": {"color": {"value": "uitk-color-blue-300"}},"background": {"value": "uitk-color-blue-500"},"text": {"color": {"value": "uitk-color-white"}}},"actionable": {"primary": {"text": {"color": {"active": {"value": "uitk-color-grey-900"},"hover": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}},"background": {"active": {"value": "uitk-color-grey-80"},"hover": {"value": "uitk-color-grey-200"},"disabled": {"value": "rgba(76, 80, 91, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-300"},"icon": {"color": {"active": {"value": "uitk-color-grey-900"},"hover": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}}},"cta": {"text": {"color": {"active": {"value": "uitk-color-white"},"hover": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}},"background": {"active": {"value": "uitk-color-blue-700"},"hover": {"value": "uitk-color-blue-500"},"disabled": {"value": "rgba(21, 92, 147, *uitk-opacity-foreground*)"}, "value": "uitk-color-blue-600"},"icon": {"color": {"active": {"value": "uitk-color-white"},"hover": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}}},"secondary": {"text": {"color": {"active": {"value": "uitk-color-grey-900"},"hover": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}},"background": {"hover": {"value": "uitk-color-grey-200"},"active": {"value": "uitk-color-grey-80"}, "value": "transparent"},"icon": {"color": {"active": {"value": "uitk-color-grey-900"},"hover": {"value": "uitk-color-white"},"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-60"}}}},"container": {"background": {"value": "uitk-color-grey-800"},"border": {"color": {"disabled": {"value": "uitk-color-grey-600-fade-40"}, "value": "uitk-color-grey-400"}}},"draggable": {"background": {"hover": {"value": "uitk-color-grey-200"},"active": {"value": "uitk-color-blue-500"}, "value": "uitk-color-grey-500"},"icon": {"hover": {"value": "uitk-color-white"},"active": {"value": "uitk-color-white"}, "value": "uitk-color-white"}},"dropTarget": {"background": {"hover": {"value": "uitk-color-blue-2000"}, "value": "uitk-color-grey-600"},"icon": {"color": {"hover": {"value": "uitk-color-grey-60"}, "value": "uitk-color-grey-60"}},"border": {"value": "dashed 1px uitk-color-grey-200)"}},"editable": {"text": {"primary": {"value": "uitk-color-white"},"secondary": {"value": "uitk-color-grey-70"}},"icon": {"color": {"hover": {"value": "uitk-color-grey-60"},"active": {"value": "uitk-color-grey-60"},"readonly": {"value": "transparent"}, "value": "uitk-color-grey-60"}},"border": {"color": {"hover": {"value": "uitk-color-blue-300"},"active": {"value": "uitk-color-blue-400"},"readonly": {"value": "uitk-color-grey-100-fade-20"}, "value": "uitk-color-grey-100"}},"selection": {"background": {"value": "uitk-color-blue-700-fade-99"}},"background": {"value": "uitk-color-grey-800"}},"focused": {"color": {"warning": {"value": "uitk-color-orange-500"},"error": {"value": "uitk-color-red-400"}, "value": "uitk-color-blue-400"}},"measured": {"tick": {"color": {"value": "uitk-color-grey-90"}},"color": {"active": {"start": {"value": "uitk-color-teal-300"},"end": {"value": "uitk-color-blue-300"}, "value": "linear-gradient(0deg, *uitk-measured-gradient-start* 0%, *uitk-measured-gradient-stop* 100%)"}},"track": {"color": {"value": "uitk-color-grey-300"}},"font": {"size": {"value": "14px"}}},"navigable": {"indicator": {"color": {"hover": {"value": "uitk-color-grey-90"},"active": {"value": "uitk-color-orange-500"}}},"link": {"color": {"hover": {"value": "uitk-color-grey-40"},"active": {"value": "uitk-color-white"}, "value": "uitk-color-grey-40"}},"border": {"value": "solid 1px uitk-color-grey-400)"},"background": {"hover": {"value": "uitk-color-grey-600"},"active": {"value": "none"}, "value": "none"}},"overlayable": {"scrim": {"background": {"value": "rgba(36, 37, 38, 0.8)"}}},"ratable": {"background": {"hover": {"value": "uitk-color-orange-500"},"active": {"value": "uitk-color-orange-500"},"undo": {"value": "transparent"}, "value": "transparent"},"border": {"hover": {"value": "transparent"},"active": {"value": "transparent"},"undo": {"value": "uitk-color-orange-500"}, "value": "uitk-color-grey-100"}},"selectable": {"text": {"color": {"hover": {"value": "uitk-color-white"},"active": {"value": "uitk-color-white"},"blur": {"active": {"value": "uitk-color-white"}}, "value": "uitk-color-white"}},"icon": {"color": {"hover": {"value": "uitk-color-white"},"active": {"value": "uitk-color-white"},"blur": {"active": {"value": "uitk-color-white"}}, "value": "uitk-color-white"}},"background": {"hover": {"value": "uitk-color-blue-2000"},"active": {"value": "uitk-color-blue-700"},"blur": {"active": {"value": "uitk-color-grey-500"}}, "value": "uitk-color-grey-800"},"border": {"hover": {"value": "solid 1px uitk-color-blue-400)"},"active": {"value": "solid 1px uitk-color-blue-400)"},"blur": {"active": {"value": "solid 1px transparent"}}, "value": "solid 1px uitk-color-grey-70)"},"stroke": {"selecting": {"value": "uitk-color-blue-400"},"selected": {"value": "transparent"},"partial": {"value": "uitk-color-grey-100"}, "value": "uitk-color-grey-100"},"fill": {"selecting": {"value": "transparent"},"selected": {"value": "uitk-color-blue-400"},"partial": {"value": "uitk-color-blue-400"}, "value": "transparent"}},"separable": {"border": {"color": {"value": "uitk-color-grey-500"}}},"status": {"info": {"color": {"value": "uitk-color-blue-500"},"background": {"value": "uitk-color-grey-800"}},"success": {"color": {"value": "uitk-color-green-500"},"background": {"value": "uitk-color-grey-800"}},"warning": {"color": {"value": "uitk-color-orange-700"},"background": {"value": "uitk-color-grey-800"}},"error": {"color": {"value": "uitk-color-red-500"},"background": {"value": "uitk-color-grey-800"}}},"taggable": {"background": {"hover": {"value": "uitk-color-grey-200"},"active": {"value": "uitk-color-grey-80"}, "value": "uitk-color-grey-500"},"text": {"color": {"hover": {"value": "uitk-color-white"},"active": {"value": "uitk-color-grey-900"}, "value": "uitk-color-white"}},"icon": {"hover": {"value": "uitk-color-grey-60"},"active": {"value": "uitk-color-grey-900"}, "value": "uitk-color-grey-60"},"stroke": {"value": "uitk-color-grey-80"}},"text": {"primary": {"color": {"disabled": {"value": "rgba(255, 255, 255, *uitk-opacity-foreground*)"}, "value": "uitk-color-white"}},"secondary": {"color": {"disabled": {"value": "rgba(180, 183, 190, *uitk-opacity-foreground*)"}, "value": "uitk-color-grey-70"}},"growth": {"indicator": {"up": {"color": {"value": "uitk-color-green-400"}},"down": {"color": {"value": "uitk-color-red-400"}}}},"link": {"color": {"hover": {"value": "uitk-color-blue-200"},"active": {"value": "uitk-color-blue-200"},"disabled": {"value": "uitk-color-white"}, "value": "uitk-color-white"},"text": {"decoration": {"value": "underline"}}}}}}`
);
const densityAllJSON: JSONObj = JSON.parse(
  `{"uitk": {"size": {"basis": {"unit": {"value": "4px"}},"icon": {"small": {"value": "12px"},"medium": {"value": "24px"},"large": {"value": "48px"}},"regular": {"high": {"value": "20px"},"medium": {"value": "28px"},"low": {"value": "36px"},"touch": {"value": "44px"}},"stackable": {"high": {"value": "24px"},"medium": {"value": "36px"},"low": {"value": "48px"},"touch": {"value": "60px"}},"toolbar": {"high": {"value": "28px"},"medium": {"value": "44px"},"low": {"value": "60px"},"touch": {"value": "76px"}}},"spacing": {"touch": {"value": "16px"},"low": {"value": "12px"},"medium": {"value": "8px"},"high": {"value": "4px"}},"typography": {"font": {"family": {"value": "uitk-sans"}},"weight": {"light": {"value": "300"},"regular": {"value": "400"},"medium": {"value": "500"},"semiBold": {"value": "600"},"bold": {"value": "700"},"extraBold": {"value": "800"}},"size": {"10": {"value": "8px"},"30": {"value": "10px"},"40": {"value": "11px"},"50": {"value": "12px"},"60": {"value": "14px"},"70": {"value": "16px"},"80": {"value": "18px"},"90": {"value": "20px"},"100": {"value": "22px"},"110": {"value": "24px"},"120": {"value": "26px"},"125": {"value": "28px"},"130": {"value": "30px"},"140": {"value": "32px"},"150": {"value": "36px"},"170": {"value": "42px"},"180": {"value": "44px"},"210": {"value": "56px"},"240": {"value": "64px"}}},"text": {"line": {"height": {"value": "1.3"}}},"zindex": {"tooltip": {"value": "1500"},"snackbar": {"value": "1400"},"modal": {"value": "1300"},"drawer": {"value": "1200"},"appbar": {"value": "1100"}}}}`
);
const densityTouchJSON: JSONObj = JSON.parse(
  `{"uitk": {"size": {"regular": {"unit": {"value": "uitk-size-base"}},"stackable": {"unit": {"value": "uitk-size-stackable"}},"toolbar": {"unit": {"value": "uitk-size-toolbar"}}},"spacing": {"unit": {"value": "uitk-spacing-touch"}},"text": {"h1": {"font": {"size": {"value": "uitk-text-h1-fontSize-touch"}},"line": {"height": {"value": "uitk-text-h1-lineHeight-touch"}}},"h2": {"font": {"size": {"value": "uitk-text-h2-fontSize-touch"}},"line": {"height": {"value": "uitk-text-h2-lineHeight-touch"}}},"h3": {"font": {"size": {"value": "uitk-text-h3-fontSize-touch"}},"line": {"height": {"value": "uitk-text-h3-lineHeight-touch"}}},"h4": {"font": {"size": {"value": "uitk-text-h4-fontSize-touch"}},"line": {"height": {"value": "uitk-text-h4-lineHeight-touch"}}},"caption": {"font": {"size": {"value": "uitk-text-caption-fontSize-touch"}},"line": {"height": {"value": "uitk-text-caption-lineHeight-touch"}}},"help": {"font": {"size": {"value": "uitk-text-help-fontSize-touch"}},"line": {"height": {"value": "uitk-text-help-lineHeight-touch"}}},"font": {"size": {"value": "uitk-text-fontSize-touch"}},"line": {"height": {"value": "uitk-text-lineHeight-touch"}}}}}`
);
const densityLowJSON: JSONObj = JSON.parse(
  `{"uitk": {"size": {"regular": {"unit": {"value": "uitk-size-base"}},"stackable": {"unit": {"value": "uitk-size-stackable"}},"toolbar": {"unit": {"value": "uitk-size-toolbar"}}},"spacing": {"unit": {"value": "uitk-spacing-low"}},"text": {"h1": {"font": {"size": {"value": "uitk-text-h1-fontSize-low"}},"line": {"height": {"value": "uitk-text-h1-lineHeight-low"}}},"h2": {"font": {"size": {"value": "uitk-text-h2-fontSize-low"}},"line": {"height": {"value": "uitk-text-h2-lineHeight-low"}}},"h3": {"font": {"size": {"value": "uitk-text-h3-fontSize-low"}},"line": {"height": {"value": "uitk-text-h3-lineHeight-low"}}},"h4": {"font": {"size": {"value": "uitk-text-h4-fontSize-low"}},"line": {"height": {"value": "uitk-text-h4-lineHeight-low"}}},"caption": {"font": {"size": {"value": "uitk-text-caption-fontSize-low"}},"line": {"height": {"value": "uitk-text-caption-lineHeight-low"}}},"help": {"font": {"size": {"value": "uitk-text-help-fontSize-low"}},"line": {"height": {"value": "uitk-text-help-lineHeight-low"}}},"font": {"size": {"value": "uitk-text-fontSize-low"}},"line": {"height": {"value": "uitk-text-lineHeight-low"}}}}}`
);
const densityMediumJSON: JSONObj = JSON.parse(
  `{"uitk": {"size": {"regular": {"unit": {"value": "uitk-size-base"}},"stackable": {"unit": {"value": "uitk-size-stackable"}},"toolbar": {"unit": {"value": "uitk-size-toolbar"}}},"spacing": {"unit": {"value": "uitk-spacing-medium"}},"text": {"h1": {"font": {"size": {"value": "uitk-text-h1-fontSize-medium"}},"line": {"height": {"value": "uitk-text-h1-lineHeight-medium"}}},"h2": {"font": {"size": {"value": "uitk-text-h2-fontSize-medium"}},"line": {"height": {"value": "uitk-text-h2-lineHeight-medium"}}},"h3": {"font": {"size": {"value": "uitk-text-h3-fontSize-medium"}},"line": {"height": {"value": "uitk-text-h3-lineHeight-medium"}}},"h4": {"font": {"size": {"value": "uitk-text-h4-fontSize-medium"}},"line": {"height": {"value": "uitk-text-h4-lineHeight-medium"}}},"caption": {"font": {"size": {"value": "uitk-text-caption-fontSize-medium"}},"line": {"height": {"value": "uitk-text-caption-lineHeight-medium"}}},"help": {"font": {"size": {"value": "uitk-text-help-fontSize-medium"}},"line": {"height": {"value": "uitk-text-help-lineHeight-medium"}}},"font": {"size": {"value": "uitk-text-fontSize-medium"}},"line": {"height": {"value": "uitk-text-lineHeight-medium"}}}}}`
);
const densityHighJSON: JSONObj = JSON.parse(
  `{"uitk": {"size": {"regular": {"unit": {"value": "uitk-size-base"}},"stackable": {"unit": {"value": "uitk-size-stackable"}},"toolbar": {"unit": {"value": "uitk-size-toolbar"}}},"spacing": {"unit": {"value": "uitk-spacing-high"}},"text": {"h1": {"font": {"size": {"value": "uitk-text-h1-fontSize-high"}},"line": {"height": {"value": "uitk-text-h1-lineHeight-high"}}},"h2": {"font": {"size": {"value": "uitk-text-h2-fontSize-high"}},"line": {"height": {"value": "uitk-text-h2-lineHeight-high"}}},"h3": {"font": {"size": {"value": "uitk-text-h3-fontSize-high"}},"line": {"height": {"value": "uitk-text-h3-lineHeight-high"}}},"h4": {"font": {"size": {"value": "uitk-text-h4-fontSize-high"}},"line": {"height": {"value": "uitk-text-h4-lineHeight-high"}}},"caption": {"font": {"size": {"value": "uitk-text-caption-fontSize-high"}},"line": {"height": {"value": "uitk-text-caption-lineHeight-high"}}},"help": {"font": {"size": {"value": "uitk-text-help-fontSize-high"}},"line": {"height": {"value": "uitk-text-help-lineHeight-high"}}},"font": {"size": {"value": "uitk-text-fontSize-high"}},"line": {"height": {"value": "uitk-text-lineHeight-high"}}}}}`
);
const emphasisLowLightJSON: JSONObj = JSON.parse(
  `{"uitk": {"container": {"background": {"value": "transparent"},"border": {"color": {"disabled": {"value": "uitk-color-grey-60-fade-40"}, "value": "transparent"}}},"editable": {"background": {"value": "transparent"}},"measured": {"track": {"color": {"value": "uitk-color-grey-40"}},"font": {"size": {"value": "11px"}}},"separable": {"border": {"color": {"value": "uitk-color-grey-20"}}},"status": {"info": {"background": {"value": "none"}},"success": {"background": {"value": "none"}},"warning": {"background": {"value": "none"}},"error": {"background": {"value": "none"}}}}}`
);
const emphasisLowDarkJSON: JSONObj = JSON.parse(
  `{"uitk": {"container": {"background": {"value": "transparent"},"border": {"color": {"disabled": {"value": "uitk-color-grey-400-fade-40"}, "value": "transparent"}}},"editable": {"background": {"value": "transparent"}},"measured": {"track": {"color": {"value": "uitk-color-grey-500"}},"font": {"size": {"value": "11px"}}},"navigable": {"border": {"value": "none"},"background": {"hover": {"value": "uitk-color-grey-600"},"active": {"value": "none"}, "value": "none"}},"separable": {"border": {"color": {"value": "uitk-color-grey-600"}}},"status": {"info": {"background": {"value": "none"}},"success": {"background": {"value": "none"}},"warning": {"background": {"value": "none"}},"error": {"background": {"value": "none"}}}}}`
);
const emphasisHighLightJSON: JSONObj = JSON.parse(
  `{"uitk": {"container": {"background": {"value": "uitk-color-grey-20"},"border": {"color": {"value": "transparent"}}},"editable": {"background": {"value": "uitk-color-grey-20"}},"measured": {"track": {"color": {"value": "uitk-color-grey-90"}},"font": {"size": {"value": "16px"}}},"navigable": {"border": {"value": "solid 1px uitk-color-grey-60)"},"background": {"hover": {"value": "uitk-color-grey-30"},"active": {"value": "uitk-color-grey-20"}, "value": "uitk-color-grey-20"}},"overlayable": {"scrim": {"background": {"value": "rgba(0, 0, 0, 0.8)"}}},"separable": {"border": {"color": {"value": "uitk-color-grey-60"}}},"status": {"info": {"background": {"value": "uitk-color-blue-10"}},"success": {"background": {"value": "uitk-color-green-10"}},"warning": {"background": {"value": "uitk-color-orange-10"}},"error": {"background": {"value": "uitk-color-red-10"}}}}}`
);
const emphasisHighDarkJSON: JSONObj = JSON.parse(
  `{"uitk": {"container": {"background": {"value": "uitk-color-grey-600"},"border": {"color": {"value": "transparent"}}},"editable": {"background": {"value": "uitk-color-grey-900"}},"measured": {"track": {"color": {"value": "uitk-color-grey-100"}},"font": {"size": {"value": "16px"}}},"navigable": {"border": {"value": "solid 1px uitk-color-grey-400)"},"background": {"hover": {"value": "uitk-color-grey-600"},"active": {"value": "uitk-color-grey-600"}, "value": "uitk-color-grey-600"}},"overlayable": {"scrim": {"background": {"value": "rgba(0, 0, 0, 0.7)"}}},"separable": {"border": {"color": {"value": "uitk-color-grey-400"}}},"status": {"info": {"background": {"value": "uitk-color-blue-1000"}},"success": {"background": {"value": "uitk-color-green-1000"}},"warning": {"background": {"value": "uitk-color-orange-1000"}},"error": {"background": {"value": "uitk-color-red-1000"}}}}}`
);

export const uitkTheme: JSONByScope[] = [
  { scope: "mode-all", jsonObj: lightAndDarkJSON },
  { scope: "light", jsonObj: lightJSON },
  { scope: "dark", jsonObj: darkJSON },
  { scope: "density-all", jsonObj: densityAllJSON },
  { scope: "density-touch", jsonObj: densityTouchJSON },
  { scope: "density-low", jsonObj: densityLowJSON },
  { scope: "density-medium", jsonObj: densityMediumJSON },
  { scope: "density-high", jsonObj: densityHighJSON },
  { scope: "emphasis-low-light", jsonObj: emphasisLowLightJSON },
  { scope: "emphasis-low-dark", jsonObj: emphasisLowDarkJSON },
  { scope: "emphasis-high-light", jsonObj: emphasisHighLightJSON },
  { scope: "emphasis-high-dark", jsonObj: emphasisHighDarkJSON },
];
