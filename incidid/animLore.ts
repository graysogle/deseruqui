class MySchool {
  private static _students: string[] = [];

  public static get students(): string[] {
    return MySchool._students;
  }

  public static set students(newStudents: string[]) {
    MySchool._students = newStudents;
  }

  public static addStudent(student: string): void {
    MySchool._students.push(student);
  }
}

// Usage
MySchool.students = ["Neil Young", "Led Zep"];
MySchool.addStudent("Jimi Hendrix");
