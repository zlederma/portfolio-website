import React from "react";

function NameIcon() {
    return (

        // <svg
        //     fill="rgb(50,50,50)"
        //     xmlns="http://www.w3.org/2000/svg"
        //     width="42"
        //     height="30"
        //     version="1"
        //     viewBox="0 0 500 500"
        // >
        //     <path
        //         d="M1275 4966c-83-20-192-60-310-115-199-94-568-407-715-606-194-264-200-273-200-325 0-33 31-60 68-60 81 0 233 139 430 395 63 83 131 167 151 189 60 64 166 132 283 181 110 47 112 47 203 43 90-4 94-5 139-42 57-46 89-107 122-232 37-138 37-290 0-439-77-314-143-473-296-715-26-41-86-141-133-221-106-180-198-314-280-406-34-39-102-117-152-174-49-57-128-143-174-191-54-57-82-92-78-102 9-22 83-39 135-31 38 6 57 19 140 97 53 49 107 97 121 106 15 9 46 34 71 55 53 46 182 125 276 169 65 31 77 33 204 36 152 4 224-8 341-58 203-86 298-200 354-424 35-139 57-307 42-322-7-7-60-33-118-59-214-94-465-243-665-395-69-52-151-113-182-135-106-75-272-247-391-405-19-25-51-63-72-85-43-46-120-188-149-274-36-109-23-230 32-288s241-90 468-79c157 7 272 30 386 79 182 76 414 277 593 510 205 268 413 645 495 899l31 97 111 61c61 33 114 60 118 60 3 0 6-355 6-790-1-614 2-794 12-809 7-11 27-28 44-37 31-17 82-17 881-6 466 7 945 15 1063 19 274 8 260-2 260 177 0 72-5 136-11 150-7 14-28 33-47 42-33 15-98 16-904 4-478-6-871-10-874-7-2 2-1 343 3 757l8 754 305 172c305 172 542 319 547 340 2 6-46 30-106 53l-109 43-104-57c-56-32-149-79-206-106-56-26-152-78-212-115-61-37-112-65-114-63-3 2-1 578 4 1279 10 1412 14 1322-55 1354-45 22-336 23-354 2-9-10-14-388-19-1447l-7-1434-105-57-105-58-17 124c-35 247-94 426-172 526-77 99-271 209-453 257-156 40-423 44-601 7l-34-7 79 109c44 60 112 165 153 234 40 69 107 179 148 245 145 235 211 391 290 685 33 125 36 145 35 270 0 141-14 212-63 344-31 82-115 163-227 218-80 40-91 43-182 45-56 1-121-3-156-11zm680-3662c-89-240-315-633-482-840-35-44-113-85-207-110-59-16-312-19-350-4-45 17-61 55-61 150 0 77 3 92 37 162 71 149 162 259 276 336 163 110 521 303 727 392 67 29 91 36 93 26 2-8-13-58-33-112z"
        //         transform="matrix(.1 0 0 -.1 0 500)"
        //     ></path>
        // </svg>

        // <svg
        //     fill="rgb(50,50,50)"
        //     xmlns="http://www.w3.org/2000/svg"
        //     width="42"
        //     height="30"
        //     version="1"
        //     viewBox="0 0 1000 1000"
        // >
        //     <path
        //         d="M2750 9499c-193-40-567-186-731-285-94-57-382-271-514-382-294-248-541-502-678-695-31-45-90-124-130-176-39-51-81-108-92-125s-33-49-49-69c-34-44-76-155-76-201 0-83 143-125 244-71 25 14 67 36 92 50 40 21 164 141 333 320 59 63 202 242 362 455 68 91 153 194 189 230 132 133 308 240 580 352l105 43h145c82-1 163-6 186-13 67-20 183-127 226-208 44-84 110-296 132-423 21-121 21-385 1-498-53-302-217-816-338-1058-45-91-173-308-249-423-37-57-93-149-124-205-100-179-263-447-327-537-34-48-90-127-124-176s-106-139-160-200-144-164-201-230c-214-249-310-355-392-436-118-116-163-172-155-197 13-41 141-77 237-67 94 9 124 29 263 164 127 125 201 190 258 226 15 9 52 39 82 66 115 105 480 322 604 360 132 41 429 53 596 24 258-44 547-185 705-344 154-154 248-392 315-800 14-85 26-191 27-234l3-79-100-44c-558-244-1069-551-1508-906-54-43-136-105-182-136-115-78-291-237-394-356-123-143-269-319-327-395-27-36-79-98-116-138-54-60-83-106-153-245-111-218-146-321-152-449-15-273 94-398 397-455 115-21 597-30 741-14 376 43 658 161 947 394 50 39 118 94 151 121 84 66 355 352 463 487 216 272 446 628 667 1037 119 219 243 509 306 717 20 66 41 125 48 131 19 17 395 224 408 224 9 0 10-357 4-1423-6-1087-5-1432 4-1460 15-46 74-99 136-123 47-18 92-17 1769 11 2048 34 2134 36 2163 52 12 7 31 25 42 39 20 25 21 39 21 268 0 275-3 288-78 341l-44 30-681-3c-375-1-1098-9-1607-16-509-8-929-12-934-9-5 4-6 583-1 1372 6 1256 8 1367 23 1382 10 9 253 150 542 314 570 324 800 458 840 491 14 12 50 37 80 56 108 70 113 96 25 130-28 10-115 44-194 75l-144 56-51-27c-28-15-78-43-111-62-73-44-340-180-490-251-60-29-195-104-299-167-104-64-193-116-198-116-11 0-10 251 3 2625 7 1111 9 2036 5 2056-8 44-68 117-111 135-21 8-128 17-306 25-253 11-278 11-310-5-20-9-42-29-49-44-10-22-15-545-22-2607-5-1419-11-2593-13-2610-5-27-22-39-185-128-99-53-183-97-188-97s-14 55-21 122c-24 235-99 591-154 739-83 219-181 355-345 479-237 178-580 312-909 355-218 29-604 16-797-26-49-10-91-17-93-16-1 2 23 39 55 83 129 174 231 324 282 409 29 50 76 128 105 175 28 47 71 121 95 165 23 44 78 134 120 200 271 421 402 724 544 1260 74 278 79 320 73 560-5 224-11 261-78 480-44 141-90 225-173 310-122 124-320 240-461 270-102 21-307 18-425-6zm1290-6484c0-3-16-55-36-116-50-155-161-418-242-573-77-146-324-564-403-684-105-156-274-387-309-422-41-41-176-104-315-147-89-27-94-27-360-28-243 0-274 2-307 19-46 22-72 63-93 141-42 161 10 361 153 591 120 195 237 320 402 434 139 95 566 347 675 398 55 26 163 80 240 120 203 106 377 189 485 233 96 39 110 43 110 34z"
        //         transform="matrix(.1 0 0 -.1 0 1000)"
        //     ></path>
        // </svg>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(50,50,50)"
            width="40"
            height="30"
            version="1"
            viewBox="0 0 250 289"
        >
            <path
                d="M478 2290c-80-24-133-88-144-174l-7-46h1926l-7 46c-9 67-43 122-96 152l-45 27-800 2c-440 1-812-2-827-7zM1841 1799c-13-5-359-260-768-566L328 676l4-115c3-104 6-121 30-161 16-28 43-55 70-70l43-25h1630l43 25c52 29 89 88 98 153l7 47h-864c-742 0-861 2-849 14 8 8 332 251 720 540 388 290 713 539 722 554 35 55 14 127-46 156-38 18-60 19-95 5z"
                transform="matrix(.1 0 0 -.1 0 289)"
            ></path>
        </svg>
    );
}

export default NameIcon;