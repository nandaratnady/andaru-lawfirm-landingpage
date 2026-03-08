export const useSheet = async (sheetName: string) => {

  const sheetId = "1a5gN4IVV1HjgIZvdWTxVdRbmCXdYIgE6VF3cnW2QUos"

  const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`

  const { data } = await useFetch(url)

  return data
}