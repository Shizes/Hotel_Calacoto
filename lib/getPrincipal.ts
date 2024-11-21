export async function getPrincipal(url: string) {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data; 
    
}