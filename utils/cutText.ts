// Helper function to truncate long product titles

export const cutText = (text: string) =>{
    if(text.length < 15 ) return text + " ...";

    return text.substring(0, 15) + "...";
}