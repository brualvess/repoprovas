import { prisma } from '../src/database';
async function main() {
    const dataCategory = {
        name: 'Projeto'
    }
    const dataTeacher = {
        name: 'Bruna Hamori'
    }
    const dataTeacher2 = {
        name: 'Caio Freitas'
    }
    const dataTerms = {
        number: 2
    }
    const dataDisciplines = {
        name: 'JavaSCript',
        termId: 1
    }

   
    await prisma.categories.upsert({
        where: { name: dataCategory.name },
        update: {},
        create: dataCategory
    })
    await prisma.teachers.upsert({
        where: { name: dataTeacher.name },
        update: {},
        create: dataTeacher
    })
    await prisma.teachers.upsert({
        where: { name: dataTeacher2.name },
        update: {},
        create: dataTeacher2
    })
    await prisma.terms.upsert({
        where: { number: dataTerms.number },
        update: {},
        create: dataTerms
    })
    await prisma.disciplines.upsert({
        where: { name: dataDisciplines.name },
        update: {},
        create: dataDisciplines
    })
   
}
main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(()=> prisma.$disconnect())
