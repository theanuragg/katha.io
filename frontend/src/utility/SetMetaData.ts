export const setMetaTags = (
    title: string,
    description: string,
    imageUrl: string,
    url: string
  ) => {
    document.title = title; 
  
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
  
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:image", imageUrl);
    setMetaTag("og:url", url);
  };
  