import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import AvatarCircles from "./avatar-circles";
import ExpandTile from "./expand-view";
import { createPortal } from "react-dom";

const FlashCard = ({
  name,
  body,
  img,
  site,
  github,
  contribs,
}: {
  name: string;
  body: string;
  img: string;
  site: string;
  github: string;
  contribs: string[];
}) => {
  const [expanded, setExpanded] = useState<true | null>(null)
  const expandTileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (expanded) {
      const scrollControl=() =>{
        if(window.innerWidth >= 516){
          // if (expandTileRef.current && expandTileRef.current.contains()){
          //   return
          // }
          setExpanded(null)
        }
      }

      const listener=(event: any)=>{
        if (expandTileRef.current && expandTileRef.current.contains(event.target)){
          return
        }
        setExpanded(null)
      }
      window.addEventListener('scroll', scrollControl)
      window.addEventListener('touchstart', listener)
      window.addEventListener('mousedown', listener)
      return()=>{
        window.removeEventListener('scroll', scrollControl)
        window.removeEventListener('touchstart', listener)
        window.removeEventListener('mousedown', listener)
      }
    }
  }, [expanded])


  return (
    <div className="relative">
      <div
        className={cn(
          "relative w-64 h-full cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-orange-600/[.05] hover:bg-orange-600/[.1]",
          // dark styles
          // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
        onClick={() => setExpanded(true)}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="64" height="64" alt={name} src={img} />
          <div className="flex flex-col">
            <figcaption className="text-md font-medium text-black">
              {name}
            </figcaption>
            <span className="text-xs font-medium text-black/40">
              <AvatarCircles numPeople={0} avatarUrls={contribs} />
            </span>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </div>

      {expanded!==null && createPortal(
        <div className="sticky inset-5 flex items-center justify-center z-50">
            
          <span ref={expandTileRef}>
            <ExpandTile name={name} body={body} img={img} site={site} github={github} contribs={contribs} onClose={() => setExpanded(null)} />
          </span>
            
        </div>,
        document.body
      )}    
     </div>   /* Here createPortal meathod is used to place the component such that it becomes a child to the body, when its called rather than the flashcard  */
  );
};

export default FlashCard;
