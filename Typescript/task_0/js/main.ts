interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: "Patrick",
    lastName: "Macabulos",
    age: 20,
    location: "Melbourne"
}
const student2: Student = {
    firstName: "Mel",
    lastName: "Gibson",
    age: 40,
    location: "United States"
}

const studentList: Student[] = [student1, student2]

const table = document.createElement('table')
const caption = table.createCaption()
caption.textContent = "Student List"

const tableHead = table.createTHead()
const tableBody = table.createTBody()

const headers: string[] = ["First Name", "Location"]
const headerRow = tableHead.insertRow()

// create the Thead of the table
headers.forEach(header => {
    const th = document.createElement('th')
    th.textContent = header
    headerRow.appendChild(th)
})


// create the contents of the table based on studentList
studentList.forEach(student => {
    const row = tableBody.insertRow()
    const name = row.insertCell()
    const location = row.insertCell()
    name.textContent = student.firstName
    location.textContent = student.location
    row.appendChild(name)
    row.appendChild(location)
    tableBody.appendChild(row)
})

document.body.appendChild(table)