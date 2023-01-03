/*
import { AddSubExprContext, AssignStatContext, ExprParser, ExprStatContext, IdExprContext, IntExprContext, MulDivExprContext, ParenExprContext } from "./antlr/ExprParser";
import { ExprVisitor } from "./antlr/ExprVisitor";
import { AbstractParseTreeVisitor} from "antlr4ts/tree/AbstractParseTreeVisitor"
export class ExprEvalVisitor extends AbstractParseTreeVisitor<number>
    implements ExprVisitor<number> {
    protected defaultResult(): number {
        return 0;
    }

    // 保存执行输出结果
    private buffers: string[] = [];
    
    // 保存变量
    private memory: { [id: string]: number } = {};
    
    // 访问表达式语句
    visitExprStat(ctx: ExprStatContext) {
        const val = this.visit(ctx.expr());
        this.buffers.push(`${val}`);
        return val;
    }
    visitMulDivExpr(ctx: MulDivExprContext) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx._op;

        if (op.type === ExprParser.MUL) {
            return left * right;
        }
        return left / right;
    }
    visitAddSubExpr(ctx: AddSubExprContext) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx._op;

        if (op.type === ExprParser.ADD) {
            return left + right;
        }
        return left - right;
    }

    visitIntExpr(ctx: IntExprContext) {
        return parseInt(ctx.INT().text, 10);
    }
    
    visitIdExpr(ctx: IdExprContext) {
        const id = ctx.ID().text;
        if (this.memory[id] !== undefined) {
            return this.memory[id];
        }
        return 0;
    }
    visitParenExpr(ctx: ParenExprContext) {
        return this.visit(ctx.expr());
    }
    visitAssignStat(ctx: AssignStatContext) {
        const id = ctx.ID().text;
        const val = this.visit(ctx.expr());
        this.memory[id] = val;
        return val;
    }
    print():string[] {
        return this.buffers
    }
}
*/